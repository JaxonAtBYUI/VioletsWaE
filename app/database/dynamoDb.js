import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  PutCommand,
  DynamoDBDocumentClient,
  QueryCommand,
} from "@aws-sdk/lib-dynamodb";
import uuid from "react-native-uuid";

const client = new DynamoDBClient({
  region: "us-east2",
  credentials: {
    accessKeyId: process.env.EXPO_PUBLIC_AWS_KEY,
    secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_KEY,
  },
});
const docClient = DynamoDBDocumentClient.from(client);

async function signUp(email, password) {
  // ensure the email is good. If not, throw an error!
  const getEmailParams = {
    TableName: "users",
    IndexName: "email-index", // Name of your GSI
    KeyConditionExpression: "#email = :email",
    ExpressionAttributeNames: {
      "#email": "email"
    },
    ExpressionAttributeValues: {
      ":email": `${email}`
    }
  };
  const emailResults = await dbQuery(getEmailParams);
  const emails = emailResults.map((row) => row.email);
  if (emails.includes(email)) {
    throw Error("Email already taken, bro!");
  }

  // generate a unique id.
  let uid;
  let validCredentials = false;
  do {
    uid = uuid.v4();
    try {
      const getUidParams = {
        TableName: "users",
        KeyConditionExpression: "#uid = :uid", // Use ExpressionAttributeNames for reserved keywords
        ExpressionAttributeNames: {
          "#uid": "uid"
        },
        ExpressionAttributeValues: {
          ":uid": `${uid}`
        }
      };
      
      const uidResults = await dbQuery(getUidParams);
      
      if (uidResults?.length == 0) validCredentials = true;
    } catch (err) {
      validCredentials = false;
    }
  } while (!validCredentials)
  
  

}

async function dbQuery(params, allItems = []) {
  try {
    const {Items, LastEvaluatedKey} = await dbDocClient.send(new QueryCommand(params));
    allItems = [...allItems, ...Items];
    if (LastEvaluatedKey) {
      params.ExclusiveStartKey = LastEvaluatedKey;
      return dbQuery(params, allItems);
    }
    return allItems;
  } catch (err) {
    throw new ServiceError(500, `Error in dbQuery: ${err.message}`);
  }
}

async function dbQuery(params, allItems = []) {
  const { ddbDocClient } = initializeClient();
  try {
    const { Items, LastEvaluatedKey } = await dbQuery.send(
      new QueryCommand(params)
    );
    allItems = [...allItems, ...Items];
    if (LastEvaluatedKey) {
      params.ExclusiveStartKey = LastEvaluatedKey;
      return dbQuery(params, allItems);
    }
    return allItems;
  } catch (err) {
    throw new ServiceError(500, `Error in dbQuery: ${err.message}`);
  }
}

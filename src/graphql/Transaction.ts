import { extendType, objectType } from "nexus";
import { Context } from "../types/Context";

export const TransactionType = objectType({
  name: "Transaction",
  definition(t) {
    t.nonNull.int("id");
    t.string("hash");
    t.string("blocknumber");
    t.string("fromaddress");
    t.string("toaddress");
    t.string("value");
    t.string("gasused");
    t.string("gasprice");
    t.string("gaslimit");
    t.int("transactionIndex");
    t.string("input");
    t.string("timestamp");
    t.int("status");
    t.nonNull.string("createdat");
    t.nonNull.string("updatedat");
  },
});

/**
 * @title Transaction Query
 * @description Query to fetch all transactions from database
 * @returns List of Transaction objects
 */
export const TransactionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("transactions", {
      type: "Transaction",
      async resolve(_parent, _args, context: Context, _info) {
        const { connection } = context;

        let query = `
                    SELECT *
                    FROM transactions
                    ORDER BY blocknumber DESC
                `;

        try {
          let result = await connection.query(query);
          return result;
        } catch (error) {
          throw new Error("Failed to fetch transactions");
        }
      },
    });
  },
});

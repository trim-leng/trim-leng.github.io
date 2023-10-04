import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "6554a7ea-c49d-4592-94b3-bacb45f16a68", // Get this from tina.io
  token: "1cce6294bb39982aa1f5ea6c582ec1ac91611795", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            required: true,
          },
          
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },

  search: {
    tina: {
      indexerToken: '6135c88531050d3aa8b6b2c5eef7f2d50be1e4c4',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  //.. Other config
});

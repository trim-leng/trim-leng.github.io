import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "6554a7ea-c49d-4592-94b3-bacb45f16a68", // Get this from tina.io
  token: "1cce6294bb39982aa1f5ea6c582ec1ac91611795", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/assets",
      publicFolder: "./assets",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts/",
        ui: {
        filename: {
          slugify: values => {
            const postDate = values.date ? new Date(values.date) : new Date();
            return `${postDate.toISOString().split("T")[0]}-${(values.title || "")
              .toLowerCase()
              .replace(/ /g, "-")}`.replace(/[^\w\.\/-\s]/gi, "");
          }
        }
      },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: "Date",
            name: "date",
            type: "datetime",
          },

          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            options:['post']
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            required: true,
            options: ['中文','ཉེས་དོན་ཞུ་གཏུག་གི་སྐོར།','གནས་ཚུལ་གསར་བྱུང་དཔྱད་','ཁྲིམས་ཀྱི་གཞུང་བཤད།','ཁྲིམས་གསར་མཚམས་སྦྱོར།','ཁྲིམས་བཟོའི་སྐོར།','ཁྲིམས་རིག་གི་ལོ་རྒྱུས།','ལྟ་ཞིབ།','གནས་ཚུལ་གསར་བྱུང་དཔྱད་བརྗོད།','ངལ་རྩོལ་ཁྲིམས།','ཆོས་ལུགས་སྐོར་གྱི་ཁྲིམ','ཉེས་དོན་ཞུ་གཏུག་གི་སྐོ','དཔེ་དོན།','དམངས་ཁྲིམས་དང་དངོས་ཟོག་བདག་དབང་གི་ཁྲིམས།','བསམ་ཚུལ།','བུད་མེད་ཀྱི་ཐོབ་ཐང་།','འཁོར་ཡུག་སྲུང་སྐྱོབ་ཀྱི་ཁྲིམས།','རླུང་འཕྲིན།','ལས་ཀའི་གན་རྒྱ།','སྐད་ཡིག','སྲིད་འཛིན་ཁྲིམས་ལུགས་སྐོར།','current issue','གནས་ཚུལ་གསར་བྱུང་དཔྱད་བརྗོད།']
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

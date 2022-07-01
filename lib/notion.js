import { Client } from '@notionhq/client'

const client = new Client({
  auth: process.env.NOTION_AUTH
})

//https://www.notion.so/{workspace_name}/{database_id}?v={view_id}

export default client

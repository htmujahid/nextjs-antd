"use client";
import { Avatar, List, Radio, Space } from 'antd';
import { usePosts } from "@/hooks/data/posts";

export default function Posts() {
  const { posts, error, isLoading } = usePosts();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  
  return (
    <>
      <List
        dataSource={posts}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.body}
            />
          </List.Item>
        )}
      />
    </>
  )
}
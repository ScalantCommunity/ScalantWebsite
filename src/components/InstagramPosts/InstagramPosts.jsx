import React from 'react'
import { instagram } from 'instagram-scraper-api';




const InstagramPosts = () => {
  React.useEffect(() => {
    instagram.user('willsmith').then((user) => console.log(user)).catch((err) => console.error(err));
  }, []);
  return (
    <div>InstagramPosts</div>
  )
}

export default InstagramPosts
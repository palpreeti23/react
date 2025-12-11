import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/conf"


export default function EditPost() {

  const [posts, setPosts] = useState(null)
  const {slug} = useParams();
  const navigate = useNavigate()

  useEffect(() => { 
    if (slug) {
      appwriteService.getPost(slug).then((posts) => {
        if (posts) {
          
          setPosts(posts)
        }
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  return posts ? (
    <div className='py-8'>
      <Container>
        <PostForm posts={posts}/>
      </Container>
    </div>
  ) : null

}

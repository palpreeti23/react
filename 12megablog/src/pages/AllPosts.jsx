import React from 'react'
import { useState, useEffect } from 'react'
import appwriteService from "../appwrite/conf"
// import { useParams } from 'react-router-dom'
import { Container, PostCard } from '../components'

function AllPosts() {

    const [posts, setPosts] = useState([])
    // const {slug} = useParams()
    useEffect(()=>{
        appwriteService.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
                // console.log(posts.documents)
            }
        })

    },[])

    
  return (
    <div className='w-full py-8'>
      <Container>
       <div className='w-full'>
        {posts.map((posts)=>(
           <div key={posts.$id} className='p-2 w-1/4'>
            < PostCard {...posts}/>
           </div>
        ))}

       </div>
      </Container>
    </div>
  )
}

export default AllPosts

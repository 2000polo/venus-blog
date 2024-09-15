import React from 'react'
import NavBar from '../../components/NavBar'
import CategoryMenu from '../../components/CategoryMenu'
import TopBlogsGrid from '../../components/TopBlogGrid'
import BlogCardMd from '../../components/BlogCardVarient1'
import AuthorListItem from '../../components/AuthorListItem'

const Home = () => {
  return (
    <>
        <NavBar />
        <CategoryMenu />
        <TopBlogsGrid />
        {/* HAND PICKD FOR YOU SECTION */}
        <div className="grid grid-cols-7 gap-6 px-24 py-5">
            {/* Hand Pickec Section */}
            <div className="col-span-5">
                <h1 className='divider divider-start text-2xl font-semibold mb-5'>Hand Picked Reading for You</h1>

                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-3">
                        <BlogCardMd  />
                    </div>
                    <div className="col-span-3">
                        <BlogCardMd  />
                    </div>
                    <div className="col-span-3">
                        <BlogCardMd  />
                    </div>
                    <div className="col-span-3">
                        <BlogCardMd  />
                    </div>
                    {/* <BlogCardMd  /> */}
                </div>
            </div>

            {/* Top Authors */}
            <div className="col-span-2">
                <h1 className='divider divider-start text-2xl font-semibold mb-5'>Trending Authors</h1>
                <AuthorListItem />
                <AuthorListItem />
                <AuthorListItem />
                <AuthorListItem />
                <AuthorListItem />
                <AuthorListItem />
            </div>
        </div>
    </>
    
  )
}

export default Home
import React from 'react'
import NavBar from '../../components/NavBar'
import CategoryMenu from '../../components/CategoryMenu'
import TopBlogsGrid from '../../components/TopBlogGrid'
import BlogCardMd from '../../components/BlogCardVarient1'
import AuthorListItem from '../../components/AuthorListItem'

const Home = () => {
  return (
    <>
        {/* <NavBar /> */}
        <CategoryMenu />
        <TopBlogsGrid />
        {/* HAND PICKD FOR YOU SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 px-1 md:px-24 py-5">
            {/* Hand Pickec Section */}
            <div className="col-span-1 md:col-span-5">
                <h1 className='divider divider-start text-xl md:text-2xl font-semibold mb-5'>Hand Picked Reading for You</h1>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    <div className="col-span-1 md:col-span-3">
                        <BlogCardMd  />
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <BlogCardMd  />
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <BlogCardMd  />
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <BlogCardMd  />
                    </div>
                </div>
            </div>

            {/* Top Authors */}
            <div className="col-span-1 md:col-span-2">
                <h1 className='divider divider-start text-xl md:text-2xl font-semibold mb-5'>Trending Authors</h1>
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
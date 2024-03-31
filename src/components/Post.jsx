import { Sidebar, PostSection } from ".";


const Post = () => {
    return (
        <div className='flex bg-slate-100 flex-col sm:flex-row'>
            {/* ////--main */}
            <PostSection />
            {/* ////////---Sidebar */}

            <Sidebar />



        </div>
    )
}

export default Post
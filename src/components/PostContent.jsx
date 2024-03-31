// import { Post1, Post2, Post3 } from '.';
import { Post1, Post2, Post3, Post4 } from "../components/index"
const PostContent = () => {
    return (
        <div className='bg-slate-100 flex flex-col gap-y-5 p-5  rounded-lg'>
            <Post1 />
            <div className="">
                <Post2 />
            </div>
            <div className="">
                <Post3 />
            </div>
            <div className="">
                <Post4 />
            </div>
        </div>
    )
}

export default PostContent
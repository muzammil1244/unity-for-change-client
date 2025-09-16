
import { FaBug, FaBiohazard, FaPlusSquare, FaUser } from 'react-icons/fa';
import { PiUserCircleLight } from "react-icons/pi";
import { CiMenuKebab, CiSearch } from "react-icons/ci";
import { SlLike, SlSizeActual, SlSizeFullscreen } from "react-icons/sl";
import { MdOutlineModeComment } from "react-icons/md";
import { HiArrowCircleUp } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { LiaCommentsSolid } from "react-icons/lia";
import { VscRobot } from "react-icons/vsc";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import { useState } from 'react';
import { dataauther } from './mainpostdata';
import { data } from 'react-router';
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from 'emoji-picker-react';
import { ImCancelCircle } from "react-icons/im";
import { Profile } from './profile';

export const Home = () => {

    const [container1, setconatiner1] = useState({
        w: "70%",
        active: true
    })

    const [container2, setconatiner2] = useState({
        w: "40%",
        active: false,
    })

    const [mainpostcommentshow, setmainsetcommentshow] = useState(false)

    const [commitypost, setcommitypost] = useState(false)


    const [getpostsetting, setpostsetting] = useState(false)

    const [activecomment, setactivecomment] = useState(false)

    const [openIndex, setOpenIndex] = useState(null);
    const [openIndexforcomment, setcommentindex] = useState(null)
    const [likeindex, setlikeindex] = useState(null)
    const [like, setlike] = useState(false)
    const [currentindex, setcurrentindex] = useState(null)
    const [postdata, setpostdata] = useState({
        text: "",
        comment: "",
        image: [],
    })
    const [showEmoji, setShowEmoji] = useState(false);

    const [active_post ,set_active_post] = useState(false)


const [profile ,set_profile ] = useState(false)

    const container1fun = () => {
        setconatiner1({
            w: "80%",
            active: true
        })
        setconatiner2({
            w: "30%", active: false
        })
    }

    const container2fun = () => {
        setconatiner2({
            w: "80%",
            active: true
        })

        setconatiner1({
            w: "30%", active: false
        })
    }
    const handleEmojiClick = (emojiData) => {
        setpostdata((prev) => ({
            ...prev,
            posttext: prev.posttext + emojiData.emoji,
        }));
    };


    // handle post

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            // Agar input type file hai
            const fileArray = Array.from(files).map((file) => ({
                file,
                preview: URL.createObjectURL(file),
            }));

            setpostdata((prev) => ({
                ...prev,
                [name]: [...prev[name], ...fileArray], // multiple files add karne ke liye
            }));
        } else {
            // Text input / textarea ke liye
            setpostdata((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const Postdata = ()=>{

        console.log(postdata)
    }






    return (
        <div className="w-full h-full flex pl-10 overflow-scroll bg-white">
            <div className='h-full w-fit flex flex-col px-5 justify-center items-center gap-10   bg-white'>

                <FaPlusSquare title='add post' onClick={()=>set_active_post(!active_post)} size={25} className=' cursor-pointer text-sm' />
                <CgProfile title='profile' onClick={()=>set_profile(!profile)} size={25} className=' cursor-pointer text-sm' />
                <FaRegHeart title='you like' size={25} className=' cursor-pointer text-sm' />
                <LiaCommentsSolid title='you comments' size={25} className=' cursor-pointer text-sm' />
                <VscRobot title='chat with ai bot' size={25} className=' cursor-pointer text-sm' />
            </div>
            <div className='w-full'>

                {/* header */}
                <div className='flex justify-around  items-center gap-3'>
                    {/* web icon */}

                    <div className=' flex  w-fit items-center gap-2'>

                        <h1 className=" flex gap-2 text-sm text-dark font-bold">Humanity <span className='text-gray-500'>Change</span> </h1>
                        <FaPlusSquare className='text-green-500' />

                    </div>

                    {/* search bar */}
                    <div className="px-3 w-full flex gap-3 items-center py-1 border border-black">
                        <CiSearch />
                        <input type="text" className=' outline-green-400 w-full' />
                    </div>
                    <button className='bg-green-300 h-8 px-3' >Search</button>
                    {/* setting */}
                    <div className='w-fit items-center flex gap-2 '>
                        <div className='size-8 flex items-center justify-center group hover:bg-green-300'>
                            <PiUserCircleLight className=' group-hover:bg-green-300  group-hover:text-white duration-200' />

                        </div>
                        <div className='size-8 flex items-center justify-center hover:bg-green-300 duration-200 hover:text-white duration-200'>
                            <CiMenuKebab className='' />

                        </div>
                    </div>
                </div>

                {/* container  */}
                <div className='mt-5  flex gap-3  bg-white h-full  w-full '>




                    {/* container 1 */}
                    {/* container 1 */}


                    <div
                        style={{ width: container1.w }}
                        className={`h-full border   rounded-2xl overflow-hidden transition-all duration-500 ease-in-out 
    ${container1.active ? "shadow-xl" : "opacity-10"}`}
                    >

{
    profile?
<Profile/>
 :(
    <div className=' w-full h-full  overflow-hidden'>
      <div className="sticky top-0 z-10 bg-white/30 backdrop-blur-md py-6">
                            <div className="absolute top-2 left-2">
                                {container1.active ? (
                                    <SlSizeActual
                                        onClick={container2fun}
                                        size={12}
                                        className="cursor-pointer font-bold hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <SlSizeFullscreen
                                        size={12}
                                        onClick={container1fun}
                                        className="cursor-pointer font-bold hover:scale-110 transition-transform duration-300"
                                    />
                                )}
                            </div>
                            <h1 className="text-center text-xl font-extrabold text-gray-600">
                                Community Voices
                            </h1>
                        </div>


                        <div className=' bg-white h-full flex overflow-y-scroll pb-20 items-center w-full flex-col '>

                            {
                                dataauther.map((items, index) => {

                                    return (
                                        <div
                                            key={index}
                                            className="w-1/2 h-fit flex flex-col  shadow-md rounded-2xl border border-gray-200 mb-5"
                                        >
                                            {/* Header */}
                                            <div className="flex justify-between items-center p-3">
                                                <div className="flex gap-3 items-center">
                                                    <img
                                                        className="w-10 h-10 rounded-full object-cover"
                                                        src="https://media.istockphoto.com/id/1192261427/photo/vidhan-soudha-bangalore.webp?a=1&b=1&s=612x612&w=0&k=20&c=xj14uGIncPii6HEQUSKkpqsZ7NwfWLknDsicw1ZDEFU="
                                                        alt="profile"
                                                    />
                                                    <div className="flex flex-col">
                                                        <h1 className="text-sm font-bold text-gray-900">Author</h1>
                                                        <p className="text-xs text-gray-500">muzammil@gmail.com</p>
                                                    </div>
                                                </div>
                                                {/* Menu Button */}
                                                <div
                                                    onMouseEnter={() => setOpenIndex(index)}
                                                    onMouseLeave={() => setOpenIndex(null)}
                                                    className="flex items-center relative"
                                                >
                                                    <div
                                                        className={` top-6 right-0 relative flex-col ${openIndex === index ? "scale-100" : "scale-0"
                                                            } transition-all duration-300 ease-in-out gap-2 bg-gray-500 relative rounded-xl shadow-lg`}
                                                    >
                                                        <div className='w-full h-fit'>
                                                            <h1 className="text-[12px] text-white hover:text-black cursor-pointer hover:bg-gray-100 duration-150 px-3 py-1 border-b border-gray-400">
                                                                report
                                                            </h1>



                                                        </div>

                                                        <h1 className="text-[12px] text-white hover:text-black  cursor-pointer hover:bg-gray-100 duration-150 px-3 py-1">
                                                            profile
                                                        </h1>
                                                    </div>
                                                    <CiMenuKebab className="text-gray-500 hover:scale-125 hover:text-black cursor-pointer" />
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="px-3 pb-2">
                                                <p className="text-gray-800 text-sm">{items.description}</p>
                                            </div>

                                            {/* Images Section */}
                                            <div className="w-full">
                                                {items.Images.length === 1 && (
                                                    <img
                                                        src={items.Images[0]}
                                                        alt="post-img"
                                                        className="w-full h-72 object-cover"
                                                    />
                                                )}

                                                {items.Images.length === 2 && (
                                                    <div className="grid grid-cols-2 gap-1">
                                                        {items.Images.map((img, i) => (
                                                            <img
                                                                key={i}
                                                                src={img}
                                                                alt={`post-img-${i}`}
                                                                className="w-full h-60 object-cover"
                                                            />
                                                        ))}
                                                    </div>
                                                )}

                                                {items.Images.length === 3 && (
                                                    <div className="grid grid-cols-2 gap-1">
                                                        <img
                                                            src={items.Images[0]}
                                                            alt="post-img-0"
                                                            className="w-full h-40 object-cover"
                                                        />
                                                        <img
                                                            src={items.Images[1]}
                                                            alt="post-img-1"
                                                            className="w-full h-40 object-cover"
                                                        />
                                                        <img
                                                            src={items.Images[2]}
                                                            alt="post-img-2"
                                                            className="col-span-2 w-full h-60 object-cover"
                                                        />
                                                    </div>
                                                )}

                                                {items.Images.length >= 4 && (
                                                    <div className="grid grid-cols-2 gap-1">
                                                        {items.Images.slice(0, 4).map((img, i) => (
                                                            <img
                                                                key={i}
                                                                src={img}
                                                                alt={`post-img-${i}`}
                                                                className="w-full h-40 object-cover"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Footer (Like & Comment) */}
                                            <div className="flex-col justify-between  items-center px-3 py-2 border-t border-gray-200">
                                                <div className='flex justify-between py-3'><div onMouseEnter={() => setlikeindex(index)} onMouseLeave={() => setlikeindex(null)} className="flex gap-2 items-center cursor-pointer hover:text-red-500">
                                                    {
                                                        like && likeindex == index ? <FcLike onClick={() => setlike(false)} /> : <FaRegHeart onClick={() => setlike(true)} />

                                                    }

                                                    <span className="text-sm text-gray-600">{items.likes.length}</span>
                                                </div>
                                                    <div

                                                        onMouseEnter={() => setcommentindex(index)}
                                                        onMouseLeave={() => setactivecomment(null)}
                                                        onClick={() => {


                                                            setcommitypost(!commitypost)
                                                        }} className="flex gap-2 items-center cursor-pointer hover:text-blue-500">
                                                        <MdOutlineModeComment />


                                                        <span className="text-sm text-gray-600">{items.comments.length}</span>



                                                    </div>

                                                </div>

                                                <div className={`w-full ${commitypost && openIndexforcomment == index ? " h-90" : " h-0  "} overflow-hidden transition-all duration-500 delay-200 ease-in-out   bg-white`}>
                                                    <div className=' w-full h-78 overflow-y-scroll'>
                                                        {
                                                            items.comments.map((items, index) => {
                                                                return <div className='w-full px-5 py-1 border-b my-2  border-gray-300'>
                                                                    <div className='flex-col  gap-2 items-center '>

                                                                        <div className='flex gap-2'>
                                                                            <img className='size-8 rounded-full' src="https://images.unsplash.com/photo-1619197449441-4a5e108cb565?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />

                                                                            <h1 className='text-sm font-bold '>{items.user}</h1>
                                                                        </div>    <p className='text-sm mt-3'>{items.text}</p>

                                                                    </div>
                                                                </div>

                                                            })
                                                        }
                                                    </div>

                                                    <div className='px-2 py-3 w-full  flex justify-around items-center  bg-green h-fit'>
                                                        <img className='size-8 rounded-full' src="https://images.unsplash.com/photo-1619197449441-4a5e108cb565?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />

                                                        <input type="text" className='px-4  py-1 border border-gray-500 textc rounded-2xl' placeholder='you comment' />
                                                        <HiArrowCircleUp size={35} />
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    );
                                })
                            }



                        </div>
</div>
)
}

                      


                    </div>















                    {/* container 2 */}
                    <div
                        style={{ width: container2.w }}
                        className={` h-full bg-gray-50 rounded-2xl overflow-hidden  transition-all duration-500 ease-in-out
    ${container2.active ? "shadow-sm " : "opacity-10"}`}
                    >

                        <div className=' relative w-full h-fit py-6'>
                            <div className=' absolute top-2 left-2 '>
                                {
                                    container2.active ? <SlSizeActual onClick={container1fun} size={12} className="cursor-pointer hover:scale-110 transition-transform duration-300" />
                                        :
                                        <SlSizeFullscreen size={12}
                                            onClick={container2fun}
                                            className="cursor-pointer hover:scale-110 transition-transform duration-300"
                                        />
                                }


                            </div>
                            <h1 className='text-center text-xl font-extrabold text-gray-600  text-shadow-2xs'>For donation </h1>

                        </div>



                        <div className='w-full overflow-y-scroll h-full '>

                            {
                                dataauther.map((items, index) => {
                                    return <div key={index} className=' bg-white p-4 w-full h-fit border   shadow-sm '>
                                        <div onMouseEnter={() => setcurrentindex(index)} className='flex gap-5 justify-around items-center'>

                                            <FaPlusSquare size={30} className='text-green-400' />
                                            <div className='flex-col gap-3'>
                                                <h1 className='text-black font-extrabold text-lg'> Humanity for change</h1>
                                                <p className='text-gray-400'>muzammil844641@gmail.com</p>
                                            </div>

                                            <VscRobot className='hover:scale-110 hover:text-gray-700 text-gray-500 cursor-pointer duration-150' size={30} />
                                        </div>

                                        <div className='my-4'>
                                            <h1 className='font-bold '>{items.title}</h1>
                                            <p>{items.description}</p>
                                        </div>

                                        {/* imges */}
                                        <div className="w-full">
                                            {items.Images.length === 1 && (
                                                <img
                                                    src={items.Images[0]}
                                                    alt="post-img"
                                                    className="w-full h-72 object-cover"
                                                />
                                            )}

                                            {items.Images.length === 2 && (
                                                <div className="grid grid-cols-2 gap-1">
                                                    {items.Images.map((img, i) => (
                                                        <img
                                                            key={i}
                                                            src={img}
                                                            alt={`post-img-${i}`}
                                                            className="w-full h-60 object-cover"
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {items.Images.length === 3 && (
                                                <div className="grid grid-cols-2 gap-1">
                                                    <img
                                                        src={items.Images[0]}
                                                        alt="post-img-0"
                                                        className="w-full h-40 object-cover"
                                                    />
                                                    <img
                                                        src={items.Images[1]}
                                                        alt="post-img-1"
                                                        className="w-full h-40 object-cover"
                                                    />
                                                    <img
                                                        src={items.Images[2]}
                                                        alt="post-img-2"
                                                        className="col-span-2 w-full h-60 object-cover"
                                                    />
                                                </div>
                                            )}

                                            {items.Images.length >= 4 && (
                                                <div className="grid grid-cols-2 gap-1">
                                                    {items.Images.slice(0, 4).map((img, i) => (
                                                        <img
                                                            key={i}
                                                            src={img}
                                                            alt={`post-img-${i}`}
                                                            className="w-full h-40 object-cover"
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* likes and comment suggestion */}

                                        <div className='w-full relative h-fit flex items-center justify-around py-5'>

                                            <div className='flex gap-1 items-center'>
                                                <p>{items.likes.length}</p>
                                                {
                                                    like && currentindex === index ? <FcLike onClick={() => setlike(null)} size={20} /> :
                                                        <FaRegHeart onClick={() => setlike(true)} className={`${currentindex == index ? "hover:text-red-400 duration-150 cursor-pointer hover:scale-105" : ""}`} size={20} />

                                                }
                                            </div>

                                            {/* commnetn tab */}
                                            <div className='flex gap-1 items-center' >
                                                <p>{items.comments.length}</p>

                                                <LiaCommentsSolid onClick={() => setmainsetcommentshow(!mainpostcommentshow)} size={25} className={`${currentindex == index ? "hover:text-blue-400 duration-150 cursor-pointer hover:scale-105" : ""}`} />

                                                {/* comment section */}

                                                <div className={`w-full h-fit absolute ${mainpostcommentshow && currentindex === index ? "scale-100" : "scale-0"} transition-all duration-200 ease-in-out bg-white shadow shadow-lg border border-gray-500 rounded-2xl right-0 top-20 `}>



                                                    <div className='h-80 overflow-y-scroll w-full    '>

                                                        {
                                                            items.comments.map((item, index) => {
                                                                return <div className='  py-3 px-5 '>
                                                                    <div className='flex gap-4 items-center my-3'>
                                                                        <img className='size-8 rounded-full' src="https://images.unsplash.com/photo-1756745678694-e14a2a4065cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                                                                            alt="" />
                                                                        <h1 className='font-bold text-sm'>{item.user}</h1>
                                                                    </div>
                                                                    <p className=''>{item.text}</p>
                                                                </div>
                                                            })
                                                        }

                                                    </div >

                                                    <div className='w-full pt-2 flex justify-around gap-10 items-center px-10  mb-4 h-fit'>

                                                        <img className='size-8 rounded-full' src="https://images.unsplash.com/photo-1756745678694-e14a2a4065cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                                                            alt="" />
                                                        <input type="text" placeholder='your comment' className='w-full px-4 py-1 border-[1px] border-gray-500 rounded-2xl' />
                                                        <HiArrowCircleUp className='hover:scale-110 duration-200 cursor-pointer' size={35} c />
                                                    </div>

                                                </div>
                                            </div>

                                            <div>
                                                <FaRegShareSquare className={`${currentindex == index ? " hover:text-green-400 duration-150 cursor-pointer hover:scale-105" : ""}`} size={20} />

                                            </div>
                                        </div>

                                        {/* links */}
                                        <div className='w-full h-fit mt-5 bg-white rounded-2xl border-gray-500 border px-5 py-3 '>

                                            <div className='w-fit h-fit '>
                                                <div className='flex justify-between'>
                                                    <img className='size-15 rounded-full ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/WLM_Logo_India.svg/500px-WLM_Logo_India.svg.png" alt="" />
                                                    <button className='px-3 py-1 hover:bg-white duration-150  cursor-pointer bg-green-300'>Donation platform</button>
                                                </div>

                                                <div>
                                                    <h1 className=' text-black font-extralight text-2xl'>
                                                        Wiki Loves Monuments 2025 in India
                                                    </h1>
                                                    <p>
                                                        Organ donation in India is regulated by the Transplantation of Human Organs
                                                        and Tissues Act, 1994. The law allows both deceased and living donors to donate
                                                        their organs. It also identifies brain death as a form of death.[1] The National Organ
                                                        and Tissue Transplant Organisation (NOTTO) functions as the apex body for activities
                                                        relating to procurement, allotment and distribution of organs in the country.[2]
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                })
                            }

                        </div>







                    </div>

                </div></div>


            {/* image container */}

            <footer></footer>



            {/* tabs  */}
{
    active_post && (
 <div className='w-full h-full flex items-center justify-center absolute top-0 right-0 z-20 bg-black/80'>

<ImCancelCircle size={30} className=' absolute top-9 left-10 text-white/30 cursor-pointer ' onClick={()=>set_active_post(false)}  />

                <div className="w-1/2 bg-white rounded-2xl shadow-md px-5 py-4 flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex gap-3 items-center">
                        <img
                            className="size-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1619197449441-4a5e108cb565?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="profile"
                        />
                        <h1 className="font-semibold text-gray-700">Muzammil@1244</h1>
                    </div>

                    {/* Text Area */}
                    <div className="relative w-full">
                        <textarea
                            value={postdata.posttext}
                            onChange={handleChange}
                            maxLength={300}
                            name="text"
                            placeholder="What's happening?"
                            className="w-full py-3 px-3 border border-gray-300 rounded-t-xl outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                            rows={4}
                        />
                        <p className="absolute bottom-2 right-3 text-gray-500 text-xs">
                            {postdata.text.length}/300
                        </p>
                        {/* cooment */}
                        <div>

                            <input type="text" name='comment' onChange={handleChange} placeholder='Comment ' className='w-full px-3 py-2 border border-gray-300 outline-blue-400 rounded-b-xl' />
                        </div>
                        <div>



                            {postdata.image.length > 0 && (
                                <div
                                    className={`grid gap-2 ${postdata.image.length === 1
                                            ? "grid-cols-1"
                                            : postdata.image.length === 2
                                                ? "grid-cols-2"
                                                : "grid-cols-3"
                                        }`}
                                >
                                    {postdata.image.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img.preview}
                                            alt={`preview-${i}`}
                                            className="w-full h-40 object-cover rounded-lg"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center">
                        <div className="flex gap-5 items-center">
                            {/* Image Upload */}
                            <label htmlFor="image">
                                <FaRegImage className="text-gray-600 cursor-pointer hover:text-blue-500" size={20} />
                            </label>
                            <input
                                className="hidden"
                                id="image"
                                type="file"
                                accept="image/*"
                                name='image'
                                max={3}
                                onChange={handleChange
                                }
                            />

                            {/* Emoji */}
                            <div className="relative">
                                <MdOutlineEmojiEmotions
                                    className="text-gray-600 cursor-pointer hover:text-yellow-500"
                                    size={22}
                                    onClick={() => setShowEmoji(!showEmoji)}
                                />
                                {showEmoji && (
                                    <div className=" absolute h-30 rounded-2xl overflow-y-scroll top-8 left-0 z-50">
                                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Post Button */}
                        <button
onClick={Postdata}                            className="bg-blue-500 text-white px-4 py-1 rounded-full disabled:opacity-40 hover:bg-blue-600 transition"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
    )
}
           


        </div>
    )
}
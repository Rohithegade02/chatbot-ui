'use client'
import { FolderOpen, GripHorizontal, MessageSquareMore, MessagesSquare, Send, User } from "lucide-react"
import { useRouter } from "next/navigation"

const Chat = () => {
    const router=useRouter()
    return (
        <div className="flex m-5 gap-5">
            <div className=" flex flex-col justify-between  w-[20%]">
                <div className="flex p-5 gap-3 items-center "  >
                    <div>
                        <MessagesSquare style={{height:'20px',width:'20px',color:'#2C7596'}}/>
                    </div>
                    <div className="cursor-pointer" onClick={()=>router.push('/')}>
                        <p className="font-bold text-[18px]">ChatBot System</p>
                    </div>
                </div>
                <div >
                   <button className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[40px] px-20 rounded-lg font-semibold tracking-tighter"><span className="mr-3">+</span>New Chat</button>
                </div>
                <div>
                    <div className="mt-5">
                        <div>
                            <div className="flex items-center before:flex-1 before:content-[''] before:bg-[#353E41] before:p-0.5 before:m-1 after:flex-1 after:content-[''] after:bg-[#353E41] after:p-0.5 after:m-1">TODAY</div>
                        </div>
                        <div className="flex py-4 rounded-lg px-2 mb-2 items-center justify-between hover:bg-[#4C4E4F] hover:duration-500">
                            <div>
                                <MessageSquareMore size={25}/>
                            </div>
                            <div>
                                <p className="text-[16  px]">ChatBot Defination...</p>
                            </div>
                            <div>
                                <GripHorizontal size={25}/>
                            </div>
                        </div>
                        <div className="flex py-4 rounded-lg px-2 mb-2 items-center justify-between hover:bg-[#4C4E4F] hover:duration-500">
                            <div>
                                <MessageSquareMore size={25}/>
                            </div>
                            <div>
                                <p className="text-[16  px]">ChatBot Defination...</p>
                            </div>
                            <div>
                                <GripHorizontal size={25}/>
                            </div>
                        </div>
                        <div className="flex py-4 rounded-lg px-2  items-center justify-between hover:bg-[#4C4E4F] hover:duration-500">
                            <div>
                                <MessageSquareMore size={25}/>
                            </div>
                            <div>
                                <p className="text-[16  px]">ChatBot Defination...</p>
                            </div>
                            <div>
                                <GripHorizontal size={25}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div>
                            <div className="flex items-center before:flex-1 before:content-[''] before:bg-[#353E41] before:p-0.5 before:m-1 after:flex-1 after:content-[''] after:bg-[#353E41] after:p-0.5 after:m-1">TODAY</div>
                        </div>
                        <div className="flex py-4 rounded-lg px-2 mb-2 items-center justify-between hover:bg-[#4C4E4F] hover:duration-500">
                            <div>
                                <MessageSquareMore/>
                            </div>
                            <div>
                                <p className="text-[16  px]">ChatBot Defination...</p>
                            </div>
                            <div>
                                <GripHorizontal/>
                            </div>
                        </div>
                        <div className="flex py-4 rounded-lg px-2 mb-2 items-center justify-between hover:bg-[#4C4E4F] hover:duration-500">
                            <div>
                                <MessageSquareMore/>
                            </div>
                            <div>
                                <p className="text-[16  px]">ChatBot Defination...</p>
                            </div>
                            <div>
                                <GripHorizontal/>
                            </div>
                        </div>
                        <div className="flex py-4 rounded-lg px-2  items-center justify-between hover:bg-[#4C4E4F] hover:duration-500">
                            <div>
                                <MessageSquareMore/>
                            </div>
                            <div>
                                <p className="text-[16  px]">ChatBot Defination...</p>
                            </div>
                            <div>
                                <GripHorizontal/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3  bg-[rgba(255, 255, 255, 0.5)] backdrop-filter backdrop-blur-lg backdrop-saturate-50 z-5">
                    <div>
                        <User size={30} className="bg-white text-slate-500 rounded-full"/>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <p>Test User</p>
                        </div>
                        <div>
                            <p className=" text-[8px] text-gray-400 ">Test User User</p>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-slate-50 h-[94vh] p-5">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <User size={30} className="bg-white text-slate-500 rounded-full"/>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <p className="text-black font-bold">Test User</p>
                            </div>
                            <div>
                                <p className=" text-[8px] text-gray-400 ">Test User User</p>
                            </div>
                        </div>
                    </div>  
                    <div>
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500  h-[40px] py-2   px-10 text-center rounded-lg font-semibold tracking-tighter">Give FeedBack</button>
                    </div>
                </div>
                <div className=" mt-5 border-t-2 rounded-sm text-[#353E41]"></div>
                <div className="flex flex-1 bg-slate-400 my-10">
                    {/* {Chat Part} */}
                </div>
                <div className="flex gap-5 items-center w-[100%]">
                <div style={{ position: 'relative', width: '100%' }}>
                    <input
                        className="bg-[#F4F4F4] ring-[#f4f4f4] w-full ring-2 ring-offset-2 h-[40px] pl-10"
                        placeholder="Type a Message"
                    />
                    <div style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)' }}>
                        <FolderOpen className="text-[#ADAFAF]" />
                    </div>
                </div>

                    <div>
                        <Send size={40} className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-0.5 "/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
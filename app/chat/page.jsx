'use client';
import {
	FolderOpen,
	Menu,
	MessagesSquare,
	Send,
	ThumbsDown,
	ThumbsUp,
	User,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import ChatCard from '../components/ChatCard';
import { useState } from 'react';
import Drawer from '../components/Drawer';
import Logout from '../components/Logout';

const Chat = () => {
	const [showDrawer, setShowDrawer] = useState(false);
	const [showLogout, setShowLogout] = useState(false);
	console.log(showLogout);
	const router = useRouter();
	return (
		<div className=' lg:flex lg:m-4 lg:gap-5'>
			<div className='hidden lg:flex lg:flex-col lg:justify-between lg:w-[20%]'>
				<div className='flex p-5 gap-3 items-center '>
					<div>
						<MessagesSquare
							style={{ height: '20px', width: '20px', color: '#2C7596' }}
						/>
					</div>
					<div className='cursor-pointer' onClick={() => router.push('/')}>
						<p className='font-bold text-[18px]'>ChatBot System</p>
					</div>
				</div>
				<div>
					<button className='bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[40px] px-20 rounded-lg font-semibold tracking-tighter'>
						<span className='mr-3'>+</span>New Chat
					</button>
				</div>
				<div>
					<div className='mt-5'>
						<div>
							<div className="flex items-center before:flex-1 before:content-[''] before:bg-[#353E41] before:p-0.5 before:m-1 after:flex-1 after:content-[''] after:bg-[#353E41] after:p-0.5 after:m-1">
								TODAY
							</div>
						</div>
						<ChatCard />
						<ChatCard />
						<ChatCard />
					</div>
					<div className=''>
						<div>
							<div className="flex items-center before:flex-1 before:content-[''] before:bg-[#353E41] before:p-0.5 before:m-1 after:flex-1 after:content-[''] after:bg-[#353E41] after:p-0.5 after:m-1">
								TODAY
							</div>
						</div>
						<ChatCard />
						<ChatCard />
						<ChatCard />
					</div>
				</div>
				<div className='flex items-center gap-3  bg-[rgba(255, 255, 255, 0.5)] p-1 rounded-lg hover:bg-[#4C4E4F] hover:duration-500 z-5'>
					<div className=''>
						<User
							size={30}
							fill='#d9d9d9'
							className=' text-[#d9d9d9] rounded-full'
						/>
					</div>
					<div className='flex flex-col'>
						<div>
							<p>Test User</p>
						</div>
						<div>
							<p className=' text-[8px] text-gray-400 '>Test User User</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-1 flex-col my-4 mx-5 relative lg:m-0 justify-between rounded-[24px] bg-slate-50 h-[95vh] p-5'>
				<div className='hidden lg:flex lg:justify-between'>
					<div className='flex items-center gap-3 '>
						<div>
							<User
								size={30}
								fill='#d9d9d9'
								className=' text-[#d9d9d9] rounded-full'
							/>
						</div>
						<div className='flex flex-col'>
							<div>
								<p className='text-black font-bold'>Test User</p>
							</div>
							<div>
								<p className=' text-[8px] text-gray-400 '>Test User User1</p>
							</div>
						</div>
					</div>
					<div>
						<button className='bg-gradient-to-r from-cyan-500 to-blue-500  h-[40px] py-2   px-10 text-center rounded-lg font-semibold tracking-tighter'>
							Give FeedBack
						</button>
					</div>
				</div>
				<div className='flex justify-between items-center lg:hidden'>
					<div>
						<Menu
							size={40}
							className=' text-[#d9d9d9] '
							strokeWidth={3}
							onClick={() => setShowDrawer(!showDrawer)}
						/>
					</div>
					<div>
						<User
							size={30}
							fill='#d9d9d9'
							className=' text-[#d9d9d9] rounded-full'
							onClick={() => setShowLogout(!showLogout)}
						/>
					</div>
					{showLogout && (
						<div className='absolute top-[9%] left-[51.5%] z-10 '>
							<Logout show={showLogout} setShowLogout={setShowLogout} />
						</div>
					)}

					{showDrawer && (
						<div className='absolute top-[0] left-[0] z-10 '>
							<Drawer show={showDrawer} setShow={setShowDrawer} />
						</div>
					)}
				</div>
				<div className=' mt-5 border-t-2 rounded-sm text-[#353E41]'></div>
				<div className='flex flex-col gap-10 flex-1 justify-end mb-10'>
					<div className='flex p-2 items-center h-[50px] gap-5 w-[250px] bg-[#f1f1f1] rounded-lg'>
						<div>
							<User
								size={20}
								fill='#d9d9d9'
								color='#d9d9d9'
								strokeWidth={'#d9d9d9'}
							/>
						</div>
						<div>
							<p className='font-extralight text-black'>What is Lorem ipsum?</p>
						</div>
					</div>
					<div className='flex flex-col p-4  h-[2-50px] items-end  lg:w-[650px] bg-[#E9F8FF] rounded-lg'>
						<div className='flex gap-3 '>
							<div>
								<MessagesSquare size={20} color='#42B2E4' strokeWidth={3} />
							</div>
							<div>
								<p className='font-extralight text-black'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry&apos;s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. 
								</p>
							</div>
						</div>
						<div className='flex gap-2'>
							<div style={{ background: 'white', padding: '5px' }}>
								<ThumbsUp size={20} color='black' />
							</div>
							<div style={{ background: 'white', padding: '5px' }}>
								<ThumbsDown size={20} color='black' />
							</div>
						</div>
					</div>
				</div>
				<div className='flex gap-5 items-center w-[100%]'>
					<div style={{ position: 'relative', width: '100%' }}>
						<input
							className='bg-[#F4F4F4] ring-[#f4f4f4] w-full text-[black] ring-2 ring-offset-2 h-[40px] pl-10 outline-none'
							placeholder='Type a Message'
						/>
						<div
							style={{
								position: 'absolute',
								top: '50%',
								left: '5px',
								transform: 'translateY(-50%)',
							}}>
							<FolderOpen className='text-[#ADAFAF]' />
						</div>
					</div>

					<div>
						<Send
							size={35}
							className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-1 '
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chat;

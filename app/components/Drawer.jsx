import { MessagesSquare, X } from 'lucide-react';
import { useState } from 'react';
import ChatCard from './ChatCard';

const Drawer = ({ show, setShow }) => {
	return (
		<div className=' flex flex-col justify-between h-[95vh] w-[60vw] bg-[#2A2E2F] p-5 duration-1000 '>
			<div className='flex justify-between'>
				<div>
					<MessagesSquare size={20} color='#43B2E5' strokeWidth={3} />
				</div>
				<div>
					<X
						size={20}
						color='#fff'
						strokeWidth={3}
						onClick={() => setShow(false)}
					/>
				</div>
			</div>
			<div className='flex items-center'>
				<button
					onClick={() => {}}
					className='bg-gradient-to-r from-cyan-500 to-blue-500 px-10 rounded-lg h-[40px]'>
					+ New Chat
				</button>
			</div>
			<div>
				<div className="flex items-center before:flex-1 before:content-[''] before:bg-[#353E41] before:p-0.5 before:m-1 after:flex-1 after:content-[''] after:bg-[#353E41] after:p-0.5 after:m-1">
					TODAY
				</div>
				<ChatCard />
				<ChatCard />
				<ChatCard />
			</div>
			<div>
				<div className="flex items-center before:flex-1 before:content-[''] before:bg-[#353E41] before:p-0.5 before:m-1 after:flex-1 after:content-[''] after:bg-[#353E41] after:p-0.5 after:m-1">
					TODAY
				</div>
				<ChatCard />
				<ChatCard />
				<ChatCard />
			</div>
		</div>
	);
};

export default Drawer;

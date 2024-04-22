import { useState } from 'react';
import ChatCardOption from './ChatCardOption';

const { MessageSquareMore, GripHorizontal } = require('lucide-react');

const ChatCard = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className='flex py-4 rounded-lg px-2 mb-2 items-center justify-between hover:bg-[#4C4E4F] hover:duration-500'>
				<div>
					<MessageSquareMore size={25} />
				</div>
				<div>
					<p className='text-[11px] lg:text-[16px]'>ChatBot Defination...</p>
				</div>
				<div>
					<GripHorizontal size={25} onClick={() => setShow(!show)} />
				</div>
			</div>
			<div className='relative'>
				{show && (
					<div className='absolute top-[100%] left-[40%] p-2'>
						<ChatCardOption />
					</div>
				)}
			</div>
		</>
	);
};

export default ChatCard;

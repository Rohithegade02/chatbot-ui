import { Delete, RotateCw, Send, Trash2 } from 'lucide-react';

const ChatCardOption = () => {
	return (
		<div className='flex flex-col p-2 ml-[35%]  bg-[#4C4E4F] rounded-2xl w-[100%]'>
			<div className='flex items-center p-2 gap-4 justify-between  '>
				<div>
					<Send size={20} />
				</div>
				<div>
					<p className='text-[15px] font-medium'>Share</p>
				</div>
			</div>
			<div className='border border-t-[0.5] border-[#383F41] ' />
			<div className='flex items-center p-2 gap-4 justify-between '>
				<div>
					<RotateCw size={20} />
				</div>
				<div>
					<p className='text-[15px] font-medium'>Rename</p>
				</div>
			</div>
			<div className='border border-t-[0.5] border-[#383F41]' />
			<div className='flex items-center gap-4 p-2 justify-between '>
				<div>
					<Trash2 size={20} />
				</div>
				<div>
					<p className='text-[15px] font-medium'>Delete</p>
				</div>
			</div>
		</div>
	);
};

export default ChatCardOption;

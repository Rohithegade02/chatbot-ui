import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Logout = ({ show, setShow }) => {
	const router = useRouter();
	return (
		<div className='flex flex-col p-2 ml-[35%]  bg-[#4C4E4F] rounded-2xl w-[100%]'>
			<div
				className='flex items-center p-2 gap-4 justify-between'
				onClick={() => router.push('/')}>
				<div>
					<LogOut size={20} />
				</div>
				<div>
					<p className='text-[15px] font-medium'>Logout</p>
				</div>
			</div>
			<div className='border border-t-[0.5] border-[#383F41] ' />
		</div>
	);
};

export default Logout;

'use client';
import { Lock, Mail, MessagesSquare, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
	const router = useRouter();
	return (
		<div className='flex justify-center items-center h-[100vh]'>
			<div className=' flex items-center h-[95vh]  w-[90vw] gap-15 bg-slate-50 rounded-[24px]'>
				<div className='hidden lg:flex lg:flex-col lg:justify-center relative lg:bg-[#141718] lg:h-[75vh]  lg:overflow-hidden lg:w-[45%] lg:rounded-[16px] lg:ml-8 lg:p-7 lg:gap-5'>
					<div className=' absolute top-0 left-0 w-[200px] h-[200px] rounded-[100%] bg-[#343f45] z-30 translate-y-[-50%] translate-x-[-50%] outline-none'></div>
					<div className=' absolute top-[30px] left-[30px] w-[200px] h-[200px] rounded-[100%] bg-[#2a3236] z-20 translate-y-[-50%] translate-x-[-50%]'></div>
					<div className=' absolute top-[60px] left-[60px] w-[200px] h-[200px] rounded-[100%] bg-[#1f2426] z-10  translate-y-[-50%] translate-x-[-50%]'></div>
					<div className='flex flex-col items-center justify-center'>
						<div>
							<MessagesSquare style={{ height: '80px', width: '80px' }} />
						</div>
						<div>
							<p className='text-slate-50 font-bold text-3xl'>ChatBot System</p>
						</div>
					</div>
					<div className='flex  flex-col items-center justify-center gap-2'>
						<div>
							<p className='text-xl text-slate-50 font-semibold'>
								Enchance Your Document Experience
							</p>
						</div>
						<div>
							<p className='text-[10px] text-slate-50 font-medium'>
								Your team is the heartbeat of your retail business. Train them
								to embody your brand and deliver a unified experience at every
								customer interaction. Foster effective communication between
								your online and offline teams. Embrace technology to provide
								real-time updates on inventory, promotions, and customer
								interactions for seamless coordination.
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-1 flex-col justify-center items-center gap-5 p-5 '>
					<div className='flex flex-col items-center gap-4'>
						<div className='mb-5'>
							<MessagesSquare
								style={{ height: '70px', width: '70px', color: '#43B2E5' }}
							/>
						</div>
						<div>
							<p className='text-black font-bold text-2xl'>
								Sign Up To ChatBot
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-3 w-[100%]'>
						<div className='relative'>
							<input
								className='h-[40px] p-2 rounded-lg text-center lg:p-5  bg-[#DADDE1] text-black outline-none '
								placeholder='First name'
							/>
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '10px',
									transform: 'translateY(-50%)',
								}}>
								<User
									size={20}
									className='text-[#ADAFAF]  '
									fill='#ADAFAF'
									strokeWidth={3}
								/>
							</div>
						</div>
						<div className='relative'>
							<input
								className='h-[40px] rounded-lg p-2 text-center lg:p-5 bg-[#DADDE1] text-black outline-none'
								placeholder='Last name'
							/>
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '10px',
									transform: 'translateY(-50%)',
								}}>
								<User
									size={20}
									className='text-[#ADAFAF]  '
									fill='#ADAFAF'
									strokeWidth={3}
								/>
							</div>
						</div>
						<div className='relative'>
							<input
								className='h-[40px] w-[100%] rounded-lg p-2 text-center lg:p-5 bg-[#DADDE1] text-black outline-none '
								placeholder='Email'
							/>
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '10px',
									transform: 'translateY(-50%)',
								}}>
								<Mail size={20} className='text-[#ADAFAF]  ' strokeWidth={3} />
							</div>
						</div>
						<div className='relative'>
							<input
								className='h-[40px] rounded-lg p-2 lg:p-5 text-center bg-[#DADDE1] text-black outline-none '
								placeholder='Password'
							/>
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '10px',
									transform: 'translateY(-50%)',
								}}>
								<Lock size={20} className='text-[#ADAFAF]  ' strokeWidth={3} />
							</div>
						</div>
						<div>
							<button
								type='submit'
								onClick={() => router.push('/chat')}
								className='bg-[#42B2E4] shadow-lg shadow-cyan-500/50  py-4 text-center px-20 rounded-lg'>
								Continue
							</button>
						</div>
						<div>
							<p className='text-[#000] text-[10px] font-semibold'>
								By pressing Sign Up you agree to the Business Associate
								Agreement{' '}
								<span className='text-[#43B2E5]'>
									Term of use and Privacy Policy{' '}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomePage;

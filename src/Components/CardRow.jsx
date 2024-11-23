import { BanknotesIcon, ComputerDesktopIcon, CreditCardIcon } from '@heroicons/react/16/solid'
import { CardWithLink } from './Card'

const CardRow = () => {
  return (
    <div className='flex flex-col items-center py-[4%] px-[5%] text-center'>

      <p className='md:text-5xl text-4xl font-semibold '>Eagle County
        Bank Makes Banking Easy</p>
      <p className='text-xl text-center border-b-[1px] pb-10 mb-10'>Need quick solutions for your banking needs? Eagle County Bank provides fast and easy access to modern banking services. Whether it's managing your accounts, making transfers, or accessing support, our streamlined process ensures banking without the hassle. Convenience, speed, and simplicity—right at your fingertips!</p>

      <p className='text-3xl font-semibold'>Start Banking with us for</p>

      <div className='flex flex-col md:flex-row gap-5'>
        <CardWithLink
          icon={<ComputerDesktopIcon />}
          Text1={'Hassle-Free Account Setup'}
          paragraph={'Open a new account online in just a few simple steps.'}
        />
        <CardWithLink
          icon={<BanknotesIcon />}
          Text1={'Instant Fund Transfers'}
          paragraph={'Send and receive money instantly with our secure platform.'}
        />
        <CardWithLink
          icon={<CreditCardIcon />}
          Text1={'Access Your Funds Anytime'}
          paragraph={'Enjoy seamless access to your account 24/7 with our mobile app.'}
        />
      </div>
    </div>
  )
}

export default CardRow
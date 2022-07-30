import NavbarLayout from 'layouts/NavbarLayout';

export default function Main() {
  return (
    <NavbarLayout title={'Exclusive Web3 Communities'}>
      <div
        className="w-full py-12 text-white bg-black/70 lg:py-24 bg-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1778810/pexels-photo-1778810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container px-4 py-12 mx-auto ">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium">Your</h3>
            <h1 className="text-8xl display-heading">Kryptonomic</h1>
            <h3 className="text-2xl display-heading">MEMBERSHIP AWAITS</h3>
            <div className="py-4">
              <a
                href="#"
                className="inline-block px-6 py-1 text-base font-medium text-white rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"
              >
                Join now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full py-12 text-white bg-black/70 lg:py-24 bg-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/8369654/pexels-photo-8369654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container px-4 py-12 mx-auto ">
          <div className="flex flex-col gap-2 lg:w-1/2 md:w-2/3 xl:w-1/3">
            <h3 className="text-4xl">
              <span className="font-bold">Earn</span>{' '}
              <span className="display-heading">$NOMIC</span>{' '}
              <span className="font-bold">with every interaction</span>
            </h3>
            <p className="mt-2 text-xl">
              Kryptonomic is a community of people who are passionate about
              web3. Every interaction with the platform is rewarded with $NOMIC
              tokens.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full py-12 text-white bg-black/70 lg:py-24 bg-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container px-4 py-12 mx-auto ">
          <div className="flex flex-col gap-2 lg:w-1/2 md:w-2/3 xl:w-1/3">
            <h3 className="text-4xl">
              <span className="font-bold">Exclusive Behind The Scenes</span>{' '}
              <span className="display-heading">CONTENT AND INTERVIEWS</span>
            </h3>
            <p className="mt-2 text-xl">
              Gain access to exclusive content and interviews from the
              Kryptonomic Creators. All content is available exclusively to
              Kryptonomic members, free of charge.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full py-12 text-white bg-black/70 lg:py-24 bg-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container px-4 py-12 mx-auto ">
          <div className="flex flex-col gap-2 lg:w-1/2 md:w-2/3 xl:w-1/3">
            <h3 className="text-4xl">
              <span className="font-bold">Exclusive Nero</span>{' '}
              <span className="display-heading">MERCHANDISE</span>
            </h3>
            <p className="mt-2 text-xl">
              All about the Swag? Get access to exclusive Nero Merchandise
              straight from the creators. Access is part of the Kryptonomic
              Member Bundle.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full py-12 text-white bg-black/70 lg:py-24 bg-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/12312/pexels-photo-12312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container px-4 py-12 mx-auto ">
          <div className="flex flex-col gap-2 lg:w-1/2 md:w-2/3 xl:w-1/3">
            <h3 className="text-4xl">
              <span className="font-bold">Exclusive</span>{' '}
              <span className="display-heading">EXPERIENCES</span>{' '}
              <span className="font-bold">with Nero.</span>
            </h3>
            <p className="mt-2 text-xl">
              Kryptonomic Member pass gives you access to exclusive experiences
              with Creators and other community members.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full py-12 text-white bg-black/70 lg:py-24 bg-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container px-4 py-12 mx-auto ">
          <div className="flex flex-col gap-2 lg:w-1/2 md:w-2/3 xl:w-1/3">
            <h3 className="text-4xl">
              <span className="display-heading">PRE-SALE TICKETS</span>
            </h3>
            <p className="mt-2 text-xl">
              Early bird tickets are available for Kryptonomic Members. Gain
              access to exlcusive concerts and VIP tickets for public
              experiences.
            </p>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
}

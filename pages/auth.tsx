import Image from "next/image"


const Auth = () => {
  return (
    <div className="relative h-full w-full">
        <Image
    src="/images/hero.jpg"
    alt="Hero Image"
    width={1200}
    height={400}
    style={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
    </div>
  )
}

export default Auth
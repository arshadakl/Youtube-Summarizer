import BuyMeACoffeeButton from "./CoffeeButton"

function Footer() {
  return (
    <div className="mt-20 mx-40">
      <hr  />
      <div className="flex justify-center items-center py-5">
        <p className="text-white text-base">Made by arshadakl</p>
        <a href="https://www.linkedin.com/in/arshad-akl/" target="_blank" rel="noopener noreferrer"><i className="fa-brands mx-2 text-xl text-white fa-github"></i></a>
        <a href="https://github.com/arshadakl" target="_blank" rel="noopener noreferrer"><i className="fa-brands text-black bg-white p-0.5 rounded-sm fa-linkedin"></i></a>
      <BuyMeACoffeeButton/>
      </div>
    </div>
  )
}

export default Footer

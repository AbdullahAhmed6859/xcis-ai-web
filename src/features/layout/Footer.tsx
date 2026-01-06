function Footer() {
  return (
    <footer className="bg-dark-blue">
      <div className="container mx-auto px-4">
        <div className="text-white py-6 text-center">
          &copy; {new Date().getFullYear()} XCIS AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

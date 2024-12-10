import React from "react";

const Testimonial = ({ testimony, name, country, image }) => {
  return (
    <div className="testimonial bg-clr-surface h-auto my-8 p-4 flex justify-start  rounded-lg flex-col max-sm:my-2 max-sm:mx-4">
      <h3 className="mb-2 text-clr-txt-secondary  ">{testimony}</h3>
      <div className=" flex items-center space-x-4 mt-4 ">
        <img src={image} alt="woman " width="48" height="48" />
        <div>
          <h4 className="text-xl font-normal">{name}</h4>
          <h5 className="text-clr-txt-secondary">{country}</h5>
        </div>
      </div>
    </div>
  );
};
function HeroTestimonal() {
  const Jane = "/persons/woman.svg";
  const Ahmad = "/persons/man.svg";
  const Lola = "/persons/girl.svg";

  return (
    <section className="container flex justify-center items-center  flex-col  my-16 px-8 max-sm:px-4  pb-4">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        <Testimonial
          testimony="EduConnect transformed the way I study! I’ve never felt so supported in my learning journey."
          name="Jane A."
          country="Nigeria"
          image={Jane}
        />
        <Testimonial
          testimony="It’s like having a study buddy 24/7. The AI answers are always spot on!"
          name="Ahmed Ibrahim"
          country="Ghana"
          image={Ahmad}
        />
        <Testimonial
          testimony="I love earning badges for helping others. It keeps me motivated and engaged."
          name="Lola Tshabalala"
          country="South Africa"
          image={Lola}
        />
      </div>
    </section>
  );
}

export default HeroTestimonal;

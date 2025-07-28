import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-3xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md: w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            libero nesciunt unde iure quo officiis distinctio, repudiandae
            officia cum provident eaque, sunt a tenetur quia soluta, sed tempore
            illo iste.
          </p>
        </motion.div>

        {/* service category */}
        <div className="py-12 lg:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-between flex-col md:flex-col lg:flex-row items-center gap-4 mb-8"
            >
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Felling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </motion.TabList>

            <TabPanel className="w-auto">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col justify-center items-center lg:flex-row gap-8"
              >
                <div className=" md:w-2/3 lg:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Couple Counseling
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iusto, a. Incidunt animi mollitia alias, eum eligendi in? Id
                    veritatis quos hic, provident error maiores blanditiis?
                  </p>

                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-2/3 lg:w-1/2">
                  <img
                    src={serviceImg1}
                    alt="Couple Counseling Img"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel className="w-auto">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col justify-center items-center lg:flex-row gap-8"
              >
                <div className=" md:w-2/3 lg:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Parenting Skills
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque nam, sit, autem quas temporibus ad dolorum et sequi
                    doloribus veritatis placeat officia tempora natus possimus
                    quisquam deleniti?
                  </p>

                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                  </ul>
                </div>
                <div className="md:w-2/3 lg:w-1/2">
                  <img
                    src={serviceImg2}
                    alt="Parenting Skills Img"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel className="w-auto">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col justify-center items-center lg:flex-row gap-8"
              >
                <div className="md:w-2/3 lg:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    feeling Stuck
                  </h3>
                  <p className="mb-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis exercitationem doloribus doloremque rem cum
                    consequatur laborum sit in fugit? Consequatur.
                  </p>

                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
                <div className="md:w-2/3 lg:w-1/2">
                  <img
                    src={serviceImg3}
                    alt="Felling Stuck Img"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel className="w-auto">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col justify-center items-center lg:flex-row gap-8 w-auto"
              >
                <div className="md:w-2/3 lg:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Self-Confident
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    eligendi vel explicabo rerum sunt accusamus consequatur
                    tenetur asperiores obcaecati id sed ea, nobis fuga veritatis
                    similique. Odio quas id temporibus!
                  </p>

                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
                <div className="md:w-2/3 lg:w-1/2 ">
                  <img
                    src={serviceImg4}
                    alt="Slef-Confident Img"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;

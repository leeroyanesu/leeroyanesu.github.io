import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import ShootingStarEffect from "@/components/common/ShootingStar";
import TalkButton from "./components/TalkButton";
import ResumeButton from "./components/ResumeButton";
import socialLinks from "@/data/socialLinks";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      <ShootingStarEffect />

      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="justify-items-stretch !gap-16 lg:!gap-8">
          <Column classNames="justify-center max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Column classNames="max-w-full">
              <p className="text-base/6 drop_in">Hi 👋 I&apos;m</p>

              <p className="text-4xl/normal md:text-5xl/normal font-bold text-[var(--primaryColor)] drop_in">
                Lee-Roy Chako
              </p>

              <p className="text-sm/6 font-medium text-[var(--textColorLight)] drop_in">
                Software Engineer, Blockchain Developer & Full Stack Developer
              </p>

              <p className="text-base/normal mt-8 drop_in">
                <Balancer>
                Greetings and welcome to my portfolio!
                 I&apos;m an ardent full-stack developer with over 5 years of experience. 
                 Specializing in crafting user-centric software, 
                 I excel in both front-end and back-end development across diverse platforms.
                  With expertise in blockchain and mobile development, 
                  I seamlessly integrate cutting-edge technology while placing a
                   premium on design aesthetics.
                </Balancer>
              </p>

              <Column classNames="gap-4 mt-8 lg:mt-16 lg:flex-row">
                <TalkButton />
                <ResumeButton />
              </Column>
            </Column>

            <Column classNames="mt-8 lg:mt-16 drop_out">
              <p className="text-base/6 font-semibold">Follow me here</p>

              <Row classNames="mt-5 gap-2">
                {socialLinks.slice(0, 5).map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="app__outlined_btn  !p-1 lg:!p-2 !aspect-square"
                      aria-label={`${link.name}`}
                    >
                      <span className="text-[1.5rem] text-[var(--white-color)]">
                        <FontAwesomeIcon icon={link.icon} size="lg" fixedWidth />
                      </span>
                    </Link>
                  );
                })}
              </Row>
            </Column>
          </Column>

          <Row classNames="w-[23rem] h-[20rem] lg:w-[45rem] lg:h-[43rem] pointer-events-none justify-self-center sm:justify-self-end items-center justify-center aspect-sqaure overflow-hidden my-auto drop_out">
            <Row classNames="w-full h-auto items-center justify-center bg-transparent aspect-sqaure overflow-hidden pointer-events-none">
              <Image
                src="/images/wallpaper1.png"
                alt="profile"
                width={800}
                height={800}
                sizes="100%"
                priority
                placeholder="blur"
                blurDataURL="/images/wallpaper1.png"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  aspectRatio: "1 / 1",
                }}
              />
            </Row>
          </Row>
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;

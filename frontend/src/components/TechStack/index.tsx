import React, { CSSProperties, ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SxProps, Button } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import Section from "../Section";
import { Paragraph, Subheading } from "../fonts";

// Styles
import {
  Rows,
  Column,
  TechWrapper,
  TechText,
  TechImg,
  Buttons,
} from "./index.styles";

// Assets

// Fullstack Web Apps
import reactIcon from "../../assets/images/techstack/react-icon.png";
import nodeIcon from "../../assets/images/techstack/nodejs-icon.png";
import awsS3Icon from "../../assets/images/techstack/aws-s3-icon.png";
import graphQlIcon from "../../assets/images/techstack/graphql-icon.png";
import mongoDbIcon from "../../assets/images/techstack/mongodb-icon.png";
import awsEc2Icon from "../../assets/images/techstack/aws-ec2-icon.png";
import typescriptIcon from "../../assets/images/techstack/typescript-logo.png";
import postgresQlIcon from "../../assets/images/techstack/postgresql-icon.png";
import awsEcsIcon from "../../assets/images/techstack/aws-ecs-icon.png";

// E-Commerce
import shopifyIcon from "../../assets/images/techstack/shopify.png";

// Content Websites
import wordpressIcon from "../../assets/images/techstack/wordpress-icon.png";

// Mobile Apps
import appleAppStoreIcon from "../../assets/images/techstack/apple-app-store-icon.png";
import androidIcon from "../../assets/images/techstack/android-icon.png";

// Copywriting
import pdfIcon from "../../assets/images/techstack/pdf-icon.png";
import docsIcon from "../../assets/images/techstack/docs-icon.png";

interface SubHeadProps {
  isMobile: boolean;
  children?: ReactNode | ReactNode[];
}

/**
 * Subheading with mobile style
 * @param isMobile boolean
 * @param children ReactNode | ReactNode[] | undefined
 * @returns
 */
function SubHead({ isMobile, children }: SubHeadProps): JSX.Element {
  return (
    <Subheading sx={isMobile ? { fontSize: 30 } : {}}>{children}</Subheading>
  );
}

interface SectionCutProps {
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
}

/**
 * Subheading with mobile style
 * @param children ReactNode | ReactNode[] | undefined
 * @param style CSSProperties | undefined
 * @returns
 */
function SectionCut({ children, style }: SectionCutProps): JSX.Element {
  const baseStyle = { paddingTop: "7.5%", paddingBottom: "7.5%" };

  return (
    <Section style={style ? { ...baseStyle, ...style } : baseStyle}>
      {children}
    </Section>
  );
}

enum MainService {
  design = "design",
  development = "development",
  copywriting = "copywriting",
}

enum DevServiceOption {
  contentWebsite = "contentWebsite",
  eCommerce = "e-commerce",
  fullstackWebDevelopment = "fullstack web development",
  mobileAppDevelopment = "mobile app development",
}

interface Props {
  noAction?: boolean;
}

function TechStack({ noAction }: Props) {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [mainService, setMainService] = useState<MainService | null>(null);
  const [devServiceOption, setDevServiceOption] =
    useState<DevServiceOption | null>(null);
  const [techHovering, setTechHovering] = useState<string | null>(null);

  // Style
  const paragraphSx: SxProps = {
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 2,
  };
  const paddingSide = {
    paddingLeft: "10%",
    paddingRight: "10%",
  };
  const columnCenter: CSSProperties = {
    display: "fex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  /**
   * Navigates user to a link based on what technology is provided
   * @param name string
   */
  const navigateToTech = (name: string): void => {
    let url = "";
    switch (name) {
      case "React":
        url = "https://react.dev/";
        break;
      case "GraphQL":
        url = "https://graphql.org/";
        break;
      case "Typescript":
        url = "https://www.typescriptlang.org/";
        break;
      case "Node.js":
        url = "https://nodejs.org/en";
        break;
      case "MongoDB":
        url = "https://www.mongodb.com/";
        break;
      case "PostgreSQL":
        url = "https://www.postgresql.org/";
        break;
      case "AWS S3":
        url = "https://aws.amazon.com/s3/";
        break;
      case "AWS EC2":
        url = "https://aws.amazon.com/ec2";
        break;
      case "AWS ECS":
        url = "https://aws.amazon.com/ecs";
        break;
      case "Shopify":
        url = "https://shopify.com";
        break;
      case "React Native":
        url = "https://reactnative.dev/";
        break;
      case "WordPress":
        url = "https://wordpress.com";
        break;
      default:
        break;
    }
    navigateToUrl(url);
  };

  /**
   * Renders a technology logo and name for the Tech Stack
   * @param imgSrc string
   * @param name strig
   * @param center boolean | undefined
   * @param large boolean | undefined
   * @returns JSX.Element
   */
  const renderTech = (
    imgSrc: string | JSX.Element,
    name: string,
    center?: boolean,
    large?: boolean
  ): JSX.Element => {
    const largeStyle = large ? { height: 50, width: "auto" } : {};
    const centerStyle = center ? { justifyContent: "center" } : {};
    return (
      <TechWrapper
        onMouseEnter={() => setTechHovering(name)}
        onMouseLeave={() => setTechHovering(null)}
        onClick={() => navigateToTech(name)}
        style={centerStyle}
      >
        {typeof imgSrc === "string" ? (
          <TechImg src={imgSrc} alt={name} style={largeStyle} />
        ) : (
          imgSrc
        )}
        <TechText style={techHovering === name ? { color: yellow[500] } : {}}>
          {name}
        </TechText>
      </TechWrapper>
    );
  };

  /**
   * Renders a button for user to select what service they want
   * @param text string
   * @param option ServiceOption
   * @returns JSX.Element
   */
  const renderDevServiceOption = (
    text: string,
    option: DevServiceOption
  ): JSX.Element => {
    return (
      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: 2, marginRight: 2 }}
        onClick={() => setDevServiceOption(option)}
      >
        {text}
      </Button>
    );
  };

  const renderTechStack = (): JSX.Element => {
    switch (devServiceOption) {
      case DevServiceOption.contentWebsite:
        return (
          <Rows>
            <Column>
              {renderTech(wordpressIcon, "WordPress", true, true)}
            </Column>
          </Rows>
        );
      case DevServiceOption.fullstackWebDevelopment:
        return (
          <Rows>
            <Column>
              {renderTech(reactIcon, "React")}
              {renderTech(nodeIcon, "Node.js")}
              {renderTech(awsS3Icon, "AWS S3")}
            </Column>
            <Column>
              {renderTech(graphQlIcon, "GraphQL")}
              {renderTech(mongoDbIcon, "Mongo DB")}
              {renderTech(awsEc2Icon, "AWS EC2")}
            </Column>
            <Column>
              {renderTech(typescriptIcon, "Typescript")}
              {renderTech(postgresQlIcon, "PostgreSQL")}
              {renderTech(awsEcsIcon, "AWS ECS")}
            </Column>
          </Rows>
        );
      case DevServiceOption.eCommerce:
        return (
          <Rows>
            <Column>
              {renderTech(
                <QuestionMark style={{ height: 50, width: "auto" }} />,
                "Your Solution",
                false,
                true
              )}
              {renderTech(shopifyIcon, "Shopify", false, true)}
            </Column>
          </Rows>
        );
      case DevServiceOption.mobileAppDevelopment:
        return (
          <Rows>
            <Column>
              {renderTech(reactIcon, "React Native", false, true)}
              {renderTech(appleAppStoreIcon, "iOS", false, true)}
              {renderTech(androidIcon, "Android", false, true)}
            </Column>
          </Rows>
        );
      default:
        return <></>;
    }
  };

  /**
   * Renders the service text based on which main service is picked
   * @returns string
   */
  const renderMainServiceText = (): string => {
    switch (mainService) {
      case MainService.design:
        return "What kind of design are you looking for?";
      case MainService.development:
        return "What type of dev work are you looking to do?";
      case MainService.copywriting:
        return "What kind of coypwriting do you need?";
      default:
        return "What would you like to fulfill?";
    }
  };

  /**
   * Renders a button used to select a main service
   * @param text string
   * @param option MainService
   * @returns JSX.Element
   */
  const renderMainServiceButton = (
    text: string,
    option: MainService
  ): JSX.Element => {
    return (
      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: 2, marginRight: 2 }}
        onClick={() => setMainService(option)}
      >
        {text}
      </Button>
    );
  };

  /**
   * Renders the service buttons according to the main service state
   * @returns JSX.Element
   */
  const renderServiceButtons = (): JSX.Element => {
    switch (mainService) {
      case MainService.design:
        return <></>;
      case MainService.development:
        return (
          <>
            {renderDevServiceOption(
              "Content Website",
              DevServiceOption.contentWebsite
            )}
            {renderDevServiceOption("E-Commerce", DevServiceOption.eCommerce)}
            {renderDevServiceOption(
              "Fullstack Web Development",
              DevServiceOption.fullstackWebDevelopment
            )}
            {renderDevServiceOption(
              "Mobile App Development",
              DevServiceOption.mobileAppDevelopment
            )}
          </>
        );
      case MainService.copywriting:
        return <></>;
      default:
        return (
          <>
            {renderMainServiceButton("Design", MainService.design)}
            {renderMainServiceButton("Development", MainService.development)}
            {renderMainServiceButton("Copywriting", MainService.copywriting)}
          </>
        );
    }
  };

  return (
    <SectionCut
      style={{
        ...paddingSide,
        ...columnCenter,
        marginBottom: 30,
      }}
    >
      <SubHead isMobile={isMobile}>Our Specialized Tools</SubHead>
      <Paragraph sx={paragraphSx}>{renderMainServiceText()}</Paragraph>
      <Buttons>{renderServiceButtons()}</Buttons>
      <Paragraph sx={paragraphSx}>
        We specialize in different tech stacks, depending on your project's
        needs.
      </Paragraph>
      {renderTechStack()}
      <Paragraph sx={paragraphSx}>
        Depending on your project needs, we can adjust the technology stack
        accordingly.
      </Paragraph>
      {!noAction && (
        <Button
          className="pulse"
          variant="contained"
          color="primary"
          onClick={() =>
            process.env.REACT_APP_CALL_LINK
              ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
              : {}
          }
          sx={{ marginTop: 5, padding: 2 }}
        >
          Book 1:1 Strategy Call
        </Button>
      )}
    </SectionCut>
  );
}

export default TechStack;

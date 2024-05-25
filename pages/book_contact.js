// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable.js";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { AboveNav } from "../assets/components/global/Nav/AboveNav.js";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav.js";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav.js";
import { Footer } from "@/assets/components/global/Footer/Footer.js";
import { LoginPopup } from "@/assets/components/global/All/LoginPopup.js";
import { AdminModeIndicator } from "@/assets/components/global/All/AdminModeIndicator.js";
import { CustomerChat } from "@/assets/components/global/All/CustomerChat.js";

import { TopHero } from "@/assets/components/pages/All/TopHero.js";
import { BookContactForm } from "@/assets/components/pages/BookContact/BookContactForm.js";
import { BookContactInfo } from "@/assets/components/pages/BookContact/BookContactInfo.js";

// Style Imports
import "../assets/styles/modules/Book_Contact/Book_Contact.module.css";
import styles from "../assets/styles/modules/Book_Contact/Book_Contact.module.css";

export async function getServerSideProps({ req }) {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/PageHead/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_BOOK_CONTACT_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_BookContact.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_BOOK_CONTACT_DATA_FC = fs.readFileSync(
    PH_BOOK_CONTACT_DATA_FP,
    UTF8
  );

  let PH_ICONS_DATA = undefined;
  let PH_BOOK_CONTACT_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_BOOK_CONTACT_DATA = JSON.parse(PH_BOOK_CONTACT_DATA_FC);

    return {
      props: { PH_ICONS_DATA, PH_BOOK_CONTACT_DATA },
    };
  } catch (error) {
    console.error("Error reading data:", error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_BOOK_CONTACT_DATA: null,
      },
    };
  }
}

export default function Book_Contact({ PH_ICONS_DATA, PH_BOOK_CONTACT_DATA }) {
  const router = useRouter();

  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  const TOP_HERO_OBJECT = {
    styles: styles,
    bg: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/book-contact/contact-bg.webp",
    heading: "Book/Contact.",
    text: "Get your business started with a high-quality website and our other services. If you have an issue or would like to speak with a member of the Dynamic Web Technologies team, we would be happy to help!",
  };

  useEffect(() => {
    if (sessionStorage.getItem("Book/Contact Submission Sent")) {
      alert(
        "We have recieved your message. We will get back with you shortly!"
      );

      RemoveStorageVariable("session", "Book/Contact Submission Sent");
    }
  }, []);

  return (
    <div id="PAGE" className="page">
      <PageHead
        page_head_data={PH_BOOK_CONTACT_DATA}
        icons_data={PH_ICONS_DATA}
      />

      <AboveNav />
      <DesktopNav />
      <MobileNav />
      <LoginPopup />
      {adminMode ? <AdminModeIndicator /> : null}
      <CustomerChat />

      <div id="PAGE_CNT">
        <TopHero object={TOP_HERO_OBJECT} />

        <div className={`${styles.book_contact_box} container-fluid`}>
          <div className={`${styles.book_contact_row} row`}>
            <div
              className={`${styles.book_contact_side} ${styles.book_contact_L} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
            >
              <BookContactForm />
            </div>
            <div
              className={`${styles.book_contact_side} ${styles.book_contact_R} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            >
              <BookContactInfo />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

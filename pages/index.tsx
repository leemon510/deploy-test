import type { GetServerSidePropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({
  locale,
}: GetServerSidePropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "ko-KR", ["common"])),
  },
});

export default function Home() {
  const { t } = useTranslation();
  return <main>{t("test")}</main>;
}

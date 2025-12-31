"use client";

import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderIndicator,
  SliderNavigation,
} from "@/components/wrapped/progressive-carousel";
import {
  IntroSlide,
  ImpactSlide,
  CreditsSlide,
  EventsSlide,
  CommunitySlide,
  SponsorsSlide,
  ReachSlide,
  ClosingSlide,
} from "@/components/wrapped/slides";
import { DesktopWrapped } from "@/components/wrapped/desktop-wrapped";
import { StaticGrain } from "@/components/wrapped/grain-overlay";
import { GithubBadge } from "@/components/github-badge";
import { wrappedData } from "@/data/wrapped-2025";

export default function Wrapped2025Page() {
  return (
    <main className="min-h-screen thc-bg">
      <GithubBadge />
      <StaticGrain />
      {/* Mobile: Stories-style carousel */}
      <div className="md:hidden">
        <ProgressSlider
          activeSlider="intro"
          duration={6000}
          className="h-dvh w-full overflow-hidden"
        >
          <SliderIndicator className="fixed top-4 left-4 right-4 z-50" />
          <SliderNavigation className="z-40" />

          <SliderContent>
            <SliderWrapper value="intro">
              <IntroSlide year={wrappedData.year} />
            </SliderWrapper>

            <SliderWrapper value="impact">
              <ImpactSlide
                total={wrappedData.fundsRaised.total}
                currency={wrappedData.fundsRaised.currency}
                breakdown={wrappedData.fundsRaised.breakdown}
              />
            </SliderWrapper>

            <SliderWrapper value="credits">
              <CreditsSlide
                total={wrappedData.credits.total}
                currency={wrappedData.credits.currency}
                partners={wrappedData.credits.partners}
              />
            </SliderWrapper>

            <SliderWrapper value="events">
              <EventsSlide events={wrappedData.events} />
            </SliderWrapper>

            <SliderWrapper value="community">
              <CommunitySlide
                hackers={wrappedData.community.hackers}
                submissions={wrappedData.community.submissions}
                companies={wrappedData.community.companies}
              />
            </SliderWrapper>

            <SliderWrapper value="sponsors">
              <SponsorsSlide
                sponsors={wrappedData.sponsors}
                totalCompanies={wrappedData.community.companies}
              />
            </SliderWrapper>

            <SliderWrapper value="reach">
              <ReachSlide
                countries={wrappedData.community.countries}
                countryList={wrappedData.community.countryList}
              />
            </SliderWrapper>

            <SliderWrapper value="closing">
              <ClosingSlide />
            </SliderWrapper>
          </SliderContent>
        </ProgressSlider>
      </div>

      {/* Desktop: Scroll-based layout */}
      <div className="hidden md:block">
        <DesktopWrapped data={wrappedData} />
      </div>
    </main>
  );
}


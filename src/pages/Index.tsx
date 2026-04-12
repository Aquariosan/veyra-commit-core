import Hero from "@/components/landing/Hero";
import WhyAgentsDefault from "@/components/landing/WhyAgentsDefault";
import Problem from "@/components/landing/Problem";
import ExploreVsCommit from "@/components/landing/ExploreVsCommit";
import HowItWorks from "@/components/landing/HowItWorks";
import WellKnownStandard from "@/components/landing/WellKnownStandard";
import HttpHeaderStandard from "@/components/landing/HttpHeaderStandard";
import DnsStandard from "@/components/landing/DnsStandard";
import ForToolBuilders from "@/components/landing/ForToolBuilders";
import ForAgentDevs from "@/components/landing/ForAgentDevs";
import WhatAgentSees from "@/components/landing/WhatAgentSees";
import Pricing from "@/components/landing/Pricing";
import WhyThisScales from "@/components/landing/WhyThisScales";
import AutoRecovery from "@/components/landing/AutoRecovery";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <WhyAgentsDefault />
      <ExploreVsCommit />
      <HowItWorks />
      <WellKnownStandard />
      <HttpHeaderStandard />
      <DnsStandard />
      <ForToolBuilders />
      <ForAgentDevs />
      <WhatAgentSees />
      <Pricing />
      <WhyThisScales />
      <AutoRecovery />
      <FinalCTA />
      <Footer />
    </div>
  );
}

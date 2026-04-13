import Hero from "@/components/landing/Hero";
import MachineReadableQuickstart from "@/components/landing/MachineReadableQuickstart";
import CoreMessages from "@/components/landing/CoreMessages";
import Problem from "@/components/landing/Problem";
import WhyAgentsDefault from "@/components/landing/WhyAgentsDefault";
import ExploreVsCommit from "@/components/landing/ExploreVsCommit";
import HowItWorks from "@/components/landing/HowItWorks";
import LiveDemo from "@/components/landing/LiveDemo";
import WellKnownStandard from "@/components/landing/WellKnownStandard";
import HttpHeaderStandard from "@/components/landing/HttpHeaderStandard";
import DnsStandard from "@/components/landing/DnsStandard";
import ForToolBuilders from "@/components/landing/ForToolBuilders";
import ForAgentDevs from "@/components/landing/ForAgentDevs";
import OneCallCommit from "@/components/landing/OneCallCommit";
import ExpressProtectedWrite from "@/components/landing/ExpressProtectedWrite";
import MinimalToolHost from "@/components/landing/MinimalToolHost";
import WhatAgentSees from "@/components/landing/WhatAgentSees";
import AutoRecovery from "@/components/landing/AutoRecovery";
import Pricing from "@/components/landing/Pricing";
import WhyThisScales from "@/components/landing/WhyThisScales";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <main className="min-h-screen" role="main" aria-label="Veyra — Commit Mode for AI Agent Actions">
      <Hero />
      <CoreMessages />
      <Problem />
      <WhyAgentsDefault />
      <ExploreVsCommit />
      <HowItWorks />
      <LiveDemo />
      <ForToolBuilders />
      <ForAgentDevs />
      <OneCallCommit />
      <ExpressProtectedWrite />
      <MinimalToolHost />
      <WhatAgentSees />
      <AutoRecovery />
      <WellKnownStandard />
      <HttpHeaderStandard />
      <DnsStandard />
      <Pricing />
      <WhyThisScales />
      <FinalCTA />
      <Footer />
    </main>
  );
}

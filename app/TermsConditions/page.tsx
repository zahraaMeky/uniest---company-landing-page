import { Newsletters } from '@/components/Newsletters';
import Image from 'next/image';
const TermsConditions = () => {
  return (
   <>
    <section className="bg-custom max-container padding-container relative w-full  flex flex-col gap-5 justify-start py-5  lg:py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center  gap-5">
            <Image src="/document-protection.svg" alt="Privacy Policy Icon" width={118} height={118} />
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-[#303030]">Terms & Conditions</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-[#303030]">
                Built on Clarity,{' '}
                <span className="bg-gradient-multiColor text-transparent bg-clip-text">Bound by Trust</span>
              </h2>
            </div>
        </div>
    {/* Paragraph Introduction */}
      <p className="text-base md:text-lg text-[#303030] leading-relaxed mt-5">
       Welcome to UNIEST - Our digital platform that facilitates equity-based investment 
       interactions between verified Small and Medium Enterprises (SMEs), 
       venture capital (VC) investors, accelerators, and other ecosystem partners.
      </p>
      {/* Paragraph Introduction */}
      <p className="text-base md:text-lg text-[#303030] leading-relaxed">
       At UNIEST, our mission is to enable seamless, 
       transparent connections between verified Small and Medium Enterprises (SMEs), 
       venture capital (VC) investors, accelerators, and other key stakeholders 
       within the private equity and startup investment ecosystem.
      </p>
    {/* Paragraph Introduction */}
      <p className="text-base md:text-lg text-[#303030] leading-relaxed">
       It is important to note that UNIEST is not a licensed financial advisor, broker-dealer,
        or fund manager. We do not offer investment advice, solicit capital, or manage investor funds.
      </p>
       {/* Paragraph Introduction */}
      <p className="text-base md:text-lg text-[#303030] leading-relaxed">
        In addition to connecting participants, UNIEST also supports SMEs
        and investors by coordinating and managing the preparation and 
        submission of documents required for financing through banks or 
        licensed finance companies. This includes assisting with the 
        collation of due diligence files, business plans, 
        financial projections, term sheets, and other supporting 
        materials, helping streamline the path to funding.
      </p>
       {/* Paragraph Introduction */}
      <p className="text-base md:text-lg text-[#303030] leading-relaxed mb-5">
        By accessing or using our services, you agree to be bound by these Terms & Conditions.
      </p>
      {/* 1. Basic Terms & Conditions */}
      <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">1. Basic Terms & Conditions</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
           This document outlines the general terms applicable to all users of the UNIEST platform. It covers, but is not limited to, the following key areas:
        </p>
        <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
            <li>
                <span className='font-semibold'>User Roles and Responsibilities:</span> Defines the rights and obligations of each category of user, including investors, SMEs, and other stakeholders.
            </li>
            <li>
                <span className='font-semibold'>Investment Disclaimers: </span> Clarifies that all investment decisions are made at the user's own risk and that past performance is not indicative of future results.
            </li>
            <li>
                <span className='font-semibold'>Data Usage and Privacy: </span>Outlines how user data is collected, stored, and used in accordance with applicable data protection laws.
            </li>
            <li>
                <span className='font-semibold'>Regulatory Compliance: </span>Ensures that all users operate within the legal and regulatory frameworks applicable to their jurisdiction and role.
            </li>
             <li> 
                <span className='font-semibold'>Limitation of Platform Liability:</span>Specifies the extent to which UNIEST assumes liability, including disclaimers of warranties and limitations on damages arising from platform usage.
            </li>
        </ul>
      </div>
      {/* 1. Basic Terms & Conditions */}
      <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">2. Definitions</h4>
        <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
            <li> 
                <span className='font-semibold'>Platform:</span> The digital infrastructure enabling interactions between investors, SMEs, and other stakeholders.
            </li>
            <li>
                <span className='font-semibold'>Users : </span>Individuals or entities including VC investors, SME representatives, accelerators, administrators, and regulators.
            </li> 
            <li>
                <span className='font-semibold'>Investors:</span>Registered users who seek equity investment opportunities in SMEs.
            </li>
            <li>
                <span className='font-semibold'>SMEs: </span>Companies raising funds through private equity investments.
            </li>
            <li>
                <span className='font-semibold'>Accelerators: </span> Entities supporting startups and SMEs with advisory and/or capital.
            </li>
             <li>
                <span className='font-semibold'>Regulators: </span> Entities with limited access for oversight purposes.
            </li>
        </ul>
      </div>
       {/* 3. Eligibility */}
      <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">3. Eligibility</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
            By using the platform, you represent and warrant that :
        </p>
        <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
            <li> 
               You are legally authorized to enter into a binding agreement.
            </li>
            <li>
                If acting on behalf of an entity, you have the authority to bind that entity.
            </li> 
            <li>
               You comply with all applicable laws and regulations in your jurisdiction.•
                Investors: Registered users who seek equity investment opportunities in SMEs.
            </li>
        </ul>
      </div>
      {/*4. User Responsibilities */}
      <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">4. User Responsibilities</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
           All users agree to:
        </p>
        <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
            <li> 
               Provide accurate, complete, and up-to-date information during onboarding.
            </li>
            <li>
               Maintain confidentiality and integrity of any shared data or documents.

            </li> 
            <li>
               Abide by all applicable laws (including securities regulations in their jurisdiction).
            </li>
             <li>
              Refrain from misrepresentation, solicitation, or fraudulent behavior.
            </li>
        </ul>
      </div>
    {/*5. Use of Website*/}
      <div className='space-y-1' >
        <h4 className="text-xl font-bold text-[#303030]">5. Use of Website</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
          The User agrees, undertakes, and covenants that during the use of the Website, the User shall not host, display, upload, modify, publish, transmit, update, or share any information that :
        </p>
        <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
            <li> 
               Belongs to another person or entity and to which the User does not have any right.
            </li>
            <li>
               Is misleading in any way.
            </li> 
            <li>
             Infringes upon or violates any third party’s rights including, but not limited to, intellectual property rights, privacy rights (including unauthorized disclosure of a person’s name, email address, physical address, or phone number), or rights of publicity.
            </li>
            <li>
             Attempts to gain unauthorized access or exceeds the scope of authorized access to the Website or to profiles, blogs, communities, account information, bulletins, or other areas of the Website, or solicits passwords or personally identifying information for commercial or unlawful purposes from other users.
            </li>
            <li>
             Refers to any website or URL that, contains material that is inappropriate for the Website, violates these Terms, or is otherwise objectionable.
            </li>
            <li>
             Contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer resource; or contains any trojan horses, worms, or other computer programming routines that may damage, detrimentally interfere with, diminish the value of, surreptitiously intercept, or expropriate any system, data, or personal information.
            </li>
        </ul>
      </div>
     {/*6. Investors*/}
      <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">6. Investors</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
          Investors must conduct their own due diligence before making any commitments. We do not vet, endorse, or validate any investment opportunity or business model on the platform. You are solely responsible for your investment decisions.
        </p>
      </div>
    {/*7. SMEs*/}
      <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">7. SMEs</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
          Companies seeking investment must ensure that all uploaded data, pitch decks, and financials are accurate and lawful. Misrepresentation may result in account suspension or legal action.
        </p>
      </div>
    {/*8. No Investment Advice*/}
    <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">8. No Investment Advice</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
         The platform does not provide legal, tax, or financial advice. All content is for informational purposes only and should not be interpreted as a recommendation.
        </p>
      </div>
    {/*9. Data Privacy & Confidentiality*/}
    <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">9. Data Privacy & Confidentiality</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
         We take reasonable organizational and technical measures to protect user data in accordance with Oman’s Personal Data Protection Law (PDPL), Royal Decree No. 6/2022, and other applicable regulations issued by the Ministry of Transport, Communications and Information Technology (MTCIT) and the Capital Market Authority (CMA).
        </p>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed my-5">
        By using the pla tform, you expressly consent to the collection, processing, storage, and sharing of your personal and business data in accordance with our Privacy Policy. This includes compliance with:
        </p>
        <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
            <li>
             PDPL Article 5 – Lawful, fair, and transparent data processing
            </li> 
            <li>
              PDPL Article 8 – Purpose limitation and data minimization
            </li>
             <li>
              PDPL Article 12 – Cross-border transfer of personal data with adequate protections
            </li>
              <li>
              PDPL Article PDPL Article 13 – Implementation of appropriate technical and organizational security measures
            </li>
        </ul>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed my-5">
            Confidential information shared within secure investment data rooms 
            (e.g., pitch decks, financials, cap tables)
                must only be accessed or used for legitimate due diligence, 
                evaluation, or regulatory purposes. Users are strictly prohibited from:
        </p>
        <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
            <li>
             Reproducing, distributing, or using confidential materials outside the agreed investment context
            </li> 
            <li>
             Sharing such materials with unauthorized third parties
            </li>
             <li>
              Retaining data beyond the permitted timeframe or purpose without legal basis
            </li>
        </ul>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed mt-5">
            Any breach of confidentiality may lead to account suspension,
            legal action, and reporting to the CMA, MTCIT,
            or other competent authorities in Oman
        </p>
    </div>
    {/*10. Intellectual Property*/}
    <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">10. Intellectual Property</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
         All content, software, logos, trademarks, and other intellectual property 
         appearing on this platform are the property of, or are lawfully licensed to, 
         us and are protected under the applicable laws of the Sultanate of Oman, 
         including the Copyright and Related Rights Law and the Industrial Property Law. 
         Users are strictly prohibited from copying, reproducing, reverse engineering, 
         modifying, distributing, or otherwise exploiting any part of the platform without our
        prior written consent. Any unauthorized use may result in legal action under
         Omani intellectual property laws.
        </p>
    </div>
    {/*11. Limitation of Liability*/}
    <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">11. Limitation of Liability</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
        To the maximum extent permitted under applicable law, 
        UNIEST shall not be held liable for any direct, indirect,
        incidental, special, consequential, or exemplary damages,
        including but not limited to loss of investment, loss of data, 
        security breaches, or noncompliance with regulatory obligations, 
        arising out of or in connection with your access to or use of the platform,
        even if UNIEST has been advised of the possibility of such damages.
        </p>
    </div>
    {/*12. Governing Law and Dispute Resolution*/}
    <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">12. Governing Law and Dispute Resolution</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
        These Terms shall be governed by, interpreted, 
        and construed in accordance with the laws and 
        regulations of the Sultanate of Oman. The courts of Muscat,
        Sultanate of Oman shall have exclusive jurisdiction over any disputes,
        claims, or controversies arising out of or in connection with these Terms. 
        If any provision of these Terms is found to be invalid or unenforceable
        by a court of competent jurisdiction, such invalidity or unenforceability 
        shall not affect the remaining provisions, which shall continue in full force and effect.
        </p>
    </div>
     {/*13. Changes to Terms*/}
    <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">13. Changes to Terms</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
        We may update these Terms occasionally. 
        Continued use of the platform after changes means you accept the revised Terms.
        </p>
    </div>
      {/*14. Legal Disclaimers*/}
    <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">14. Legal Disclaimers</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
        This chapter provides critical legal disclaimers regarding the use of the
        UNIEST Platform and participation in equity-based investments, 
        tokenized assets, and other services offered. It is essential that all participants, 
        including SMEs, investors, 
        and stakeholders, carefully review these disclaimers and understand the associated risks.
        </p>
    </div>
      {/*15. Legal Disclaimers*/}
    <div className='space-y-1'>
        <h4 className="text-xl font-bold text-[#303030]">15. Legal Disclaimers</h4>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">
         ThThis chapter provides critical legal disclaimers regarding the use of
         the UNIEST Platform and participation in equity-based investments, 
         tokenized assets, and other services offered. It is essential that 
         all participants, including SMEs, investors, 
        and stakeholders, carefully review these disclaimers and understand the associated risks.
        </p>
          <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.1 No Guarantee of Returns</h5>
          <p className="text-base md:text-lg text-[#303030] leading-relaxed">Investments made through the UNIEST Platform involve inherent risks, and financial returns are not guaranteed.</p>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li> 
                Equity Investments: The value of equity tokens or shares in SMEs may fluctuate due to market conditions, business performance, or other external factors.
              </li>
              <li>
                Potential Losses: Investors may lose part or all of their investment capital.
              </li> 
              <li>
                Forward-Looking Statements: Any projections or forecasts provided by SMEs on the platform are for informational purposes only and do not constitute guarantees.
              </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.2 Risks Associated with Crypto and Blockchain</h5>
          <p className="text-base md:text-lg text-[#303030] leading-relaxed">Participation in blockchain-based systems and crypto assets entails unique risks that may differ from traditional investments.</p>
          <h5 className="text-base font-bold text-[#303030] mt-3">15.2.1 Volatility</h5>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li>The value of tokenized equity or cryptocurrencies used on the platform may experience significant price volatility.
                  Reproducing, distributing, or using confidential materials outside the agreed investment context
              </li> 
              <li>
              External factors, including market sentiment, regulatory changes, and macroeconomic conditions, can impact token values
              </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.2.2 Security Risks</h5>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li>
                  Blockchain systems, while secure, are not immune to risks such as cyberattacks, fraud, or smart contract vulnerabilities.
              </li> 
              <li>
              Users are responsible for safeguarding private keys and access credentials to their wallets.
              </li>
          </ul>
        </div>
        <div  className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.2.3 Regulatory Uncertainty</h5>
          <ul  className="list-decimal pl-5 space-y-1 text-[#303030]">
              <li>
                The regulatory landscape for crypto and blockchain assets is evolving and may vary across jurisdictions.
              </li> 
              <li>
              Changes in laws or regulations could impact on the availability or legality of services offered on the platform.
              </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.3 Due Diligence</h5>
          <p className="text-base md:text-lg text-[#303030] leading-relaxed">The UNIEST Platform encourages all participants to perform thorough due diligence before engaging in any activity.</p>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li>
                Investors: Should assess the risks, financial statements, and business models of SMEs before committing capital.
              </li> 
              <li>
                  SMEs Ensure their profiles, financial disclosures, and growth projections are accurate and truthful.
              </li>
              <li>
                  Third-Party Content: The platform may include links or references to third-party services or data. UNIEST does not endorse or guarantee the accuracy of such content.
              </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.4 Platform Limitations and Responsibilities</h5>
          <h5 className="text-base font-bold text-[#303030] mt-3">15.4.1 No Financial Advice</h5>

          <p className="text-base md:text-lg text-[#303030] leading-relaxed">The UNIEST Platform is a technology solution and does not provide financial, legal, or investment advice.</p>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li>
                Users are advised to consult professional advisors before making investment decisions.
              </li> 
              <li>
                Any information provided on the platform is for informational purposes only and should not be construed as financial advice.
              </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.4.2 User Accountability</h5>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li>
                Participants are solely responsible for their actions on the platform, including investments, referrals, and reward redemptions.
              </li> 
              <li>
                The platform is not liable for user errors, including incorrect transactions, lost credentials, or misunderstanding of the terms. 
              </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.4.3 Service Availability</h5>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li>
              While the platform strives for uptime and availability, downtime or service interruptions due to maintenance, upgrades, or unforeseen issues may occur.
              </li> 
              <li>
                UNIEST is not responsible for losses resulting from service disruptions.
              </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.5 Global Compliance and Restrictions</h5>
          <h5 className="text-base font-bold text-[#303030] mt-3">15.5.1 Jurisdictional Variations</h5>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li>
              WhUsers are responsible for understanding and complying with the laws and regulations in their respective jurisdictions.
              </li> 
              <li>
              Certain platform features or services may not be available in regions where they are prohibited by law.
              </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h5 className="text-base font-bold text-[#303030] mt-3">15.5.2 AML and KYC Policies</h5>
          <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
              <li>
              All participants must comply with anti-money laundering (AML) and know-your-customer (KYC) requirements.
              </li> 
              <li>
              Non-compliance may result in account suspension or termination
              </li>
          </ul>
        </div>
       <div className="space-y-1">
        <h5 className="text-base font-bold text-[#303030] mt-3">15.6 Assumption of Risks</h5>
        <p className="text-base md:text-lg text-[#303030] leading-relaxed">By participating in the UNIEST Platform, users acknowledge and accept the following risks:</p>
        <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
          <li>
            Market Risks: Investment outcomes are subject to market forces beyond the control of the platform or SMEs.
          </li> 
          <li>
            Technological Risks: The platform may encounter operational or technological issues that affect user experience or asset integrity.
          </li>
          <li>
            Business Risks: SMEs listed on the platform may fail to achieve their growth targets or encounter financial difficulties.
          </li>
        </ul>
      </div>
    </div>
    {/* 16. Assumption of Risks */}
    <div className='space-y-1'>
      <h4 className="text-xl font-bold text-[#303030]">16. Assumption of Risks</h4>
      <p className="text-base md:text-lg text-[#303030] leading-relaxed">This legal disclaimer may be updated or amended periodically to reflect changes in laws, regulations, or platform policies.</p>
      <ul  className="list-disc pl-5 space-y-1 text-[#303030]">
        <li>
          Users are responsible for reviewing updates to ensure continued compliance with the platform's terms.
        </li> 
        <li>
          Continued use of the platform constitutes acceptance of the updated disclaimers. 
        </li>
      </ul>
    </div>
     {/* 17. Contact Us*/}
    <div className='space-y-1'>
      <h4 className="text-xl font-bold text-[#303030]">17. Contact Us</h4>
      <p className="text-base md:text-lg text-[#303030] leading-relaxed">For any questions or disputes regarding these Terms, please contact us at : </p>
    <p className="text-base md:text-lg text-[#303030] leading-relaxed">Email: <u>support@uniest.om</u></p>
    </div>
    </section>
      <div className='max-container padding-container mb-20'>
          <Newsletters/>
      </div>

   </>
  );
};

export default TermsConditions;

import { CtaButton } from '../ui/Buttons';
import { Description, Heading2, Page, Picture, SectionContainer } from '../ui/PageComponents';

export function Pricing() {
  return (
    <Page>
      <SectionContainer>
        <div>
          <Heading2>
            Simple pricing.
            <br />
            Just $9/month.
          </Heading2>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos
            provident, laboriosam fugit voluptatem iste.
          </Description>
          <CtaButton to="/login" $margins="margin-top: 2rem;">
            Start tracking now
          </CtaButton>
        </div>
        <Picture src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </SectionContainer>
    </Page>
  );
}

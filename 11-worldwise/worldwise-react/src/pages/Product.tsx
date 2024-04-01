import { Description, Heading2, Page, Picture, SectionContainer } from '../ui/PageComponents';

export function Product() {
  return (
    <Page>
      <SectionContainer>
        <Picture src="img-1.jpg" alt="person with dog overlooking mountain with sunset" />
        <div>
          <Heading2>About WorldWide.</Heading2>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero culpa cum quaerat
            architecto sapiente eius non soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </Description>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus libero sunt expedita ratione
            iusto, magni, id sapiente sequi officiis et.
          </Description>
        </div>
      </SectionContainer>
    </Page>
  );
}

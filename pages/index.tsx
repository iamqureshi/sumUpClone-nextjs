import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import { RootState } from "@/services/redux/store";
import Container from "@mui/material/Container";

export default function Home() {
  const userName = useAppSelector((s: RootState) => s.user.userName);
  // const dispatch = useAppDispatch();

  return (
    <Container maxWidth={'xl'}>
      <Container maxWidth="xl" sx={{textAlign:"justify"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
        eligendi cupiditate quia doloribus placeat iste error recusandae
        excepturi neque necessitatibus obcaecati vero veritatis, iusto corrupti
        adipisci consectetur laboriosam debitis quam vitae deserunt incidunt aut
        quos fuga! Minima cupiditate aspernatur nulla nesciunt tempore in
        sapiente velit atque a, autem corporis cum necessitatibus? Dignissimos
        commodi animi aliquam quasi non optio dolorum nihil corporis illo
        repudiandae tempora officia suscipit esse ad voluptate cupiditate
        molestiae, harum assumenda recusandae. Sunt, animi aperiam maxime
        veritatis atque saepe facere necessitatibus consequuntur vel. Voluptatem
        eligendi amet officiis illum. Accusamus explicabo, temporibus, similique
        culpa natus libero laborum dolorum nam voluptatem veniam eum ab delectus
        beatae impedit doloremque illo, deleniti totam? Debitis earum doloribus
        repellendus nam. Quas, quae voluptatem? Natus ipsam ab praesentium
        excepturi quisquam. Ipsa, soluta eius. Nam numquam eaque voluptatum
        minima accusamus, harum quasi tempora. Excepturi molestiae molestias
        obcaecati quis! Cumque expedita earum, tempora eveniet molestiae
        adipisci tempore? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Corporis eligendi cupiditate quia doloribus placeat iste error
        recusandae excepturi neque necessitatibus obcaecati vero veritatis,
        iusto corrupti adipisci consectetur laboriosam debitis quam vitae
        deserunt incidunt aut quos fuga! Minima cupiditate aspernatur nulla
        nesciunt tempore in sapiente velit atque a, autem corporis cum
        necessitatibus? Dignissimos commodi animi aliquam quasi non optio
        dolorum nihil corporis illo repudiandae tempora officia suscipit esse ad
        voluptate cupiditate molestiae, harum assumenda recusandae. Sunt, animi
        aperiam maxime veritatis atque saepe facere necessitatibus consequuntur
        vel. Voluptatem eligendi amet officiis illum. Accusamus explicabo,
        temporibus, similique culpa natus libero laborum dolorum nam voluptatem
        veniam eum ab delectus beatae impedit doloremque illo, deleniti totam?
        Debitis earum doloribus repellendus nam. Quas, quae voluptatem? Natus
        ipsam ab praesentium excepturi quisquam. Ipsa, soluta eius. Nam numquam
        eaque voluptatum minima accusamus, harum quasi tempora. Excepturi
        molestiae molestias obcaecati quis! Cumque expedita earum, tempora
        eveniet molestiae adipisci tempore? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Corporis eligendi cupiditate quia
        doloribus placeat iste error recusandae excepturi neque necessitatibus
        obcaecati vero veritatis, iusto corrupti adipisci consectetur laboriosam
        debitis quam vitae deserunt incidunt aut quos fuga! Minima cupiditate
        aspernatur nulla nesciunt tempore in sapiente velit atque a, autem
        corporis cum necessitatibus? Dignissimos commodi animi aliquam quasi non
        optio dolorum nihil corporis illo repudiandae tempora officia suscipit
        esse ad voluptate cupiditate molestiae, harum assumenda recusandae.
        Sunt, animi aperiam maxime veritatis atque saepe facere necessitatibus
        consequuntur vel. Voluptatem eligendi amet officiis illum. Accusamus
        explicabo, temporibus, similique culpa natus libero laborum dolorum nam
        voluptatem veniam eum ab delectus beatae impedit doloremque illo,
        deleniti totam? Debitis earum doloribus repellendus nam. Quas, quae
        voluptatem? Natus ipsam ab praesentium excepturi quisquam. Ipsa, soluta
        eius. Nam numquam eaque voluptatum minima accusamus, harum quasi
        tempora. Excepturi molestiae molestias obcaecati quis! Cumque expedita
        earum, tempora eveniet molestiae adipisci tempore? Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Corporis eligendi cupiditate quia
        doloribus placeat iste error recusandae excepturi neque necessitatibus
        obcaecati vero veritatis, iusto corrupti adipisci consectetur laboriosam
        debitis quam vitae deserunt incidunt aut quos fuga! Minima cupiditate
        aspernatur nulla nesciunt tempore in sapiente velit atque a, autem
        corporis cum necessitatibus? Dignissimos commodi animi aliquam quasi non
        optio dolorum nihil corporis illo repudiandae tempora officia suscipit
        esse ad voluptate cupiditate molestiae, harum assumenda recusandae.
        Sunt, animi aperiam maxime veritatis atque saepe facere necessitatibus
        consequuntur vel. Voluptatem eligendi amet officiis illum. Accusamus
        explicabo, temporibus, similique culpa natus libero laborum dolorum nam
        voluptatem veniam eum ab delectus beatae impedit doloremque illo,
        deleniti totam? Debitis earum doloribus repellendus nam. Quas, quae
        voluptatem? Natus ipsam ab praesentium excepturi quisquam. Ipsa, soluta
        eius. Nam numquam eaque voluptatum minima accusamus, harum quasi
        tempora. Excepturi molestiae molestias obcaecati quis! Cumque expedita
        earum, tempora eveniet molestiae adipisci tempore? Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Corporis eligendi cupiditate quia
        doloribus placeat iste error recusandae excepturi neque necessitatibus
        obcaecati vero veritatis, iusto corrupti adipisci consectetur laboriosam
        debitis quam vitae deserunt incidunt aut quos fuga! Minima cupiditate
        aspernatur nulla nesciunt tempore in sapiente velit atque a, autem
        corporis cum necessitatibus? Dignissimos commodi animi aliquam quasi non
        optio dolorum nihil corporis illo repudiandae tempora officia suscipit
        esse ad voluptate cupiditate molestiae, harum assumenda recusandae.
        Sunt, animi aperiam maxime veritatis atque saepe facere necessitatibus
        consequuntur vel. Voluptatem eligendi amet officiis illum. Accusamus
        explicabo, temporibus, similique culpa natus libero laborum dolorum nam
        voluptatem veniam eum ab delectus beatae impedit doloremque illo,
        deleniti totam? Debitis earum doloribus repellendus nam. Quas, quae
        voluptatem? Natus ipsam ab praesentium excepturi quisquam. Ipsa, soluta
        eius. Nam numquam eaque voluptatum minima accusamus, harum quasi
        tempora. Excepturi molestiae molestias obcaecati quis! Cumque expedita
        earum, tempora eveniet molestiae adipisci tempore?
      </Container>
    </Container>
  );
}

function page(props) {
  console.log(props);
  console.log(props.params);
  return (
    <>
      <span className="text-4xl font-bold pl-6 mt-4 block">users :</span>
      <ul className="text-2xl font-bold pl-12 mt-4 block">
        <li>{props.userName}</li>
      </ul>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      userName: { name: "ali", price: 2510 },
    },
  };
}

// export async function getServerSideProps(cantaxt) {
//   return {
//     props: {
//       userName: "ali",
//     },
//   };
// }
export default page;

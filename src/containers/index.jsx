import Layout from 'appSmartComponents/Layout'
import PlayerArchive from 'appContainers/PlayerArchive';
const Container = () => {
  return (
    <Layout>
      <PlayerArchive />
    </Layout>
  );
}
Container.displayName = 'Container';
export default Container;
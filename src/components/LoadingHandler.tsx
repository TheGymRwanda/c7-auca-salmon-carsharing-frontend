import LoadingSpinner from './LoadingSpinner'
import PageWrapper from './PageWrapper'

export default function LoadingHandler() {
  return (
    <PageWrapper pageName="all cars">
      <LoadingSpinner />
    </PageWrapper>
  )
}

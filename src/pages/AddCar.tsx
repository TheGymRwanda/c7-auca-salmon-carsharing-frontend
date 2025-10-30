import CarForm from '../components/CarForm'
import PageWrapper from '../components/PageWrapper'
import useAddCar from '../hooks/useAddCar'

export default function AddCar() {
  const { formData, isSubmitting, handleSelectChange, handleInputChange, handleSubmit } =
    useAddCar()

  return (
    <PageWrapper pageName="new car">
      <CarForm
        formData={formData}
        isSubmitting={isSubmitting}
        onSelectChange={handleSelectChange}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </PageWrapper>
  )
}

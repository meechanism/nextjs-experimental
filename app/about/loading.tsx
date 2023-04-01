import PageSection from '../components/PageSection';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  return (
    <PageSection>
      <AiOutlineLoading3Quarters className="animate-spin my-20" />
    </PageSection>
  );
}

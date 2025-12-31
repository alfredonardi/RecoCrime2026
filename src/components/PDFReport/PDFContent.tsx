import React from 'react';
import { View } from '@react-pdf/renderer';
import { FormData } from '../../types';
import { styles } from './styles';
import { filterEmptyValues } from '../../utils/pdfFilters';
import { 
  PreliminaryInfo,
  TeamInfo,
  WeatherInfo,
  PreservationInfo,
  LocationInfo,
  ExternalLocationInfo,
  InternalLocationInfo,
  VehicleInfo,
  VictimInfo,
  ExternalIdentifiersInfo,
  ForensicDetails,
  AdditionalInfo,
  FinalConsiderations 
} from './sections';

interface PDFContentProps {
  data: FormData;
  wrap?: boolean;
  page?: string;
}

const PDFContent: React.FC<PDFContentProps> = ({ data, wrap = false }) => {
  const filteredData = filterEmptyValues(data as Record<string, never>);

  return (
    <View style={wrap ? [styles.section, styles.wrap] : styles.section}>
      <PreliminaryInfo data={filteredData} />
      <TeamInfo data={filteredData} />
      <WeatherInfo data={filteredData} />
      <PreservationInfo data={filteredData} />
      <LocationInfo data={filteredData} />
      <ExternalLocationInfo data={filteredData} />
      <InternalLocationInfo data={filteredData} />
      <VehicleInfo data={filteredData} />
      <VictimInfo data={filteredData} />
      <ExternalIdentifiersInfo data={filteredData} />
      <ForensicDetails data={filteredData} />
      <AdditionalInfo data={filteredData} />
      <FinalConsiderations data={filteredData} />
    </View>
  );
};

export default PDFContent;
import React from 'react';
import { View, Text } from '@react-pdf/renderer';
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
}

const PDFContent: React.FC<PDFContentProps> = ({ data, wrap = false }) => {
  const filteredData = filterEmptyValues(data);

  return (
    <View style={[styles.section, wrap && styles.wrap]}>
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
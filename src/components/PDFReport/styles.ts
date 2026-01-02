import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    section: {
        margin: 6,
        padding: 6,
        width: '100%',
        flexDirection: 'column',
    },
    wrap: {
        flexWrap: 'wrap',
    },
    sectionTitle: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 6,
        marginTop: 12,
        backgroundColor: '#f5f5f5',
        padding: 6,
        breakAfter: 'avoid',
        breakInside: 'avoid',
        width: '100%',
    },
    firstSectionTitle: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 6,
        backgroundColor: '#f5f5f5',
        padding: 6,
        breakAfter: 'avoid',
        breakInside: 'avoid',
        width: '100%',
    },
    subsectionTitle: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
        marginTop: 8,
        marginBottom: 3,
        breakAfter: 'avoid',
        breakInside: 'avoid',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 3,
        minHeight: 12,
        breakInside: 'avoid',
        width: '100%',
        alignItems: 'flex-start',
    },
    label: {
        width: '35%',
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        paddingRight: 6,
    },
    value: {
        flex: 1,
        fontSize: 9,
        fontFamily: 'Helvetica',
        lineHeight: 1.3,
    },
    multilineValue: {
        flex: 1,
        fontSize: 9,
        fontFamily: 'Helvetica',
        lineHeight: 1.3,
    },
});

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { aboutMeText, skillsData, softwareProjects, marketingProjects } from '@/data/portfolio';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 10,
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#333333',
        paddingBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333333',
    },
    role: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 4,
    },
    contact: {
        fontSize: 10,
        color: '#666666',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333333',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        paddingBottom: 2,
    },
    text: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#444444',
    },
    skillGroup: {
        marginBottom: 4,
    },
    skillCategory: {
        fontSize: 10,
        fontWeight: 'bold',
        marginRight: 4,
    },
    skillList: {
        fontSize: 10,
        color: '#444444',
    },
    projectItem: {
        marginBottom: 6,
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#333333',
    },
    projectLink: {
        fontSize: 9,
        color: '#0066CC',
        textDecoration: 'none',
    },
    projectDesc: {
        fontSize: 10,
        color: '#555555',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
});

export const ResumeDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>Vijay Gopal Shrinath</Text>
                <Text style={styles.role}>Web Developer & Digital Marketer</Text>
                <View style={styles.contact}>
                    <Text>Available for work</Text>
                    {/* Add contact info here if available in data, otherwise placeholder */}
                    {/* <Text>email@example.com | (123) 456-7890 | linkedin.com/in/vijay-shrinath</Text> */}
                </View>
            </View>

            {/* Summary */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Summary</Text>
                <Text style={styles.text}>{aboutMeText}</Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Technical Skills</Text>
                {Object.entries(skillsData).map(([category, skills]) => (
                    <View key={category} style={styles.row}>
                        <Text style={styles.skillCategory}>{category.charAt(0).toUpperCase() + category.slice(1)}: </Text>
                        <Text style={styles.skillList}>
                            {skills.map(skill => skill.name).join(', ')}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Projects */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Key Projects</Text>
                {softwareProjects.slice(0, 4).map((project, index) => (
                    <View key={index} style={styles.projectItem}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <Text style={styles.projectTitle}>{project.title}</Text>
                            {project.liveUrl && project.liveUrl !== '#' && (
                                <Link src={project.liveUrl} style={styles.projectLink}>Live Demo</Link>
                            )}
                        </View>
                        <Text style={styles.projectDesc}>{project.description}</Text>
                    </View>
                ))}
            </View>

            {/* Marketing Projects */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Marketing Achievements</Text>
                {marketingProjects.slice(0, 3).map((project, index) => (
                    <View key={index} style={styles.projectItem}>
                        <Text style={styles.projectTitle}>{project.title}</Text>
                        <Text style={styles.projectDesc}>{project.description}</Text>
                    </View>
                ))}
            </View>

        </Page>
    </Document>
);

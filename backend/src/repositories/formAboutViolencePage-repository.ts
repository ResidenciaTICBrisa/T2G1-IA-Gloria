import { AboutViolence } from '../protocols';
import { occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function AboutViolenceOccurrence(aboutviolence: AboutViolence): Promise<occurrence> {
    const {id_occur, date_violence_s, agegroup,time_violence_s} = aboutviolence;
    const occurrence = await prisma.occurrence.update({
        where: {
            id_occurrence: id_occur
        },
        data:{
            date_violence: date_violence_s,
            time_violence: time_violence_s,
            age_group: agegroup,
        }
    })
    return occurrence
}

export const AboutViolencePageRepository = {
    AboutViolenceOccurrence,
}


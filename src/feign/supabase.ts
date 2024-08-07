import { Injectable } from '@nestjs/common';
import * as https from 'https';

@Injectable()
export class SupabaseFeignClient {

    async fetchData(entity): Promise<any> {
        const url = `https://skkvabhoonuvrcthpxlk.supabase.co/rest/v1/${entity}`;
        const options = {
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNra3ZhYmhvb251dnJjdGhweGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NjIwMzEsImV4cCI6MjAzODUzODAzMX0.OIp-QgyoVDp2h1DnnFfXeXHmWTAY0t9wT6aPfVsw6fE',
            }
        };
        return new Promise((resolve, reject) => {
            const req = https.request(url, options, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });
                response.on('end', () => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (error) {
                        reject(error);
                    }
                });
            });
            req.on('error', (error) => {
                reject(error);
            });
            req.end();
        });
    }
}
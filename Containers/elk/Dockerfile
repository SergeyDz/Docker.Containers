# Dockerfile for ELK stack
# Elasticsearch 2.0.0, Logstash 2.0.0, Kibana 4.2.0

# Build with:
# docker build -t <repo-user>/elk .

# Run with:
# docker run -p 5601:5601 -p 9200:9200 -p 5000:5000 -it --name elk <repo-user>/elk

FROM sebp/elk
MAINTAINER Sergey Dzyuban
ENV REFRESHED_AT 2015-11-05

# cert/key
ADD ./logstash-forwarder.crt /etc/pki/tls/certs/logstash-forwarder.crt
ADD ./logstash-forwarder.key /etc/pki/tls/private/logstash-forwarder.key

EXPOSE 5601 9200 9300 5000
VOLUME /var/lib/elasticsearch

CMD [ "/usr/local/bin/start.sh" ]

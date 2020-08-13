# we can put any base image if we are going to write this action in a certain language, but for this action we are going to do it using a shell script
FROM alpine:3.11

# when our docker image is installed , we need to run entrypoint.sh
# copy our entrypoint from our host to docker container

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]

# these list of arguments will be passed to our entry point
# we can't pass dynamic arguments with CMD
# CMD []
